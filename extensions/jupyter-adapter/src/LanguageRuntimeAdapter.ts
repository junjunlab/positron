/*---------------------------------------------------------------------------------------------
 *  Copyright (c) RStudio, PBC.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';
import { JupyterKernel } from './JupyterKernel';
import { JupyterKernelSpec } from './JupyterKernelSpec';
import { JupyterMessagePacket } from './JupyterMessagePacket';
import { JupyterDisplayData } from './JupyterDisplayData';
import { JupyterExecuteResult } from './JupyterExecuteResult';
import { JupyterExecuteInput } from './JupyterExecuteInput';
import { JupyterKernelInfoReply } from './JupyterKernelInfoReply';

/**
 * LangaugeRuntimeAdapter wraps a JupyterKernel in a LanguageRuntime compatible interface.
 */
export class LanguageRuntimeAdapter
	implements vscode.Disposable, vscode.LanguageRuntime {

	private readonly _kernel: JupyterKernel;
	private readonly _messages: vscode.EventEmitter<vscode.LanguageRuntimeMessage>;
	private readonly _state: vscode.EventEmitter<vscode.RuntimeState>;
	readonly metadata: vscode.LanguageRuntimeMetadata;

	constructor(private readonly _spec: JupyterKernelSpec,
		integratedLsp: boolean,
		private readonly _channel: vscode.OutputChannel) {
		this._kernel = new JupyterKernel(this._spec, integratedLsp, this._channel);

		// Generate kernel metadata and ID
		this.metadata = {
			language: this._spec.language,
			name: this._spec.display_name,
			version: '0.0.1',
			id: uuidv4(),
		};
		this._channel.appendLine('Registered kernel: ' + JSON.stringify(this.metadata));

		// Create emitter for LanguageRuntime messages and state changes
		this._messages = new vscode.EventEmitter<vscode.LanguageRuntimeMessage>();
		this._state = new vscode.EventEmitter<vscode.RuntimeState>();
		this.onDidReceiveRuntimeMessage = this._messages.event;
		this.onDidChangeRuntimeState = this._state.event;

		// Bind to message stream from kernel
		this.onMessage = this.onMessage.bind(this);
		this._kernel.addListener('message', this.onMessage);

		// Bind to status stream from kernel
		this.onStatus = this.onStatus.bind(this);
		this._kernel.addListener('status', this.onStatus);
	}

	onDidReceiveRuntimeMessage: vscode.Event<vscode.LanguageRuntimeMessage>;
	onDidChangeRuntimeState: vscode.Event<vscode.RuntimeState>;

	/**
	 * Executes a fragment of code in the kernel.
	 *
	 * @param code The code to execute.
	 * @param mode The execution mode.
	 * @param errorBehavior The error behavior.
	 */
	public execute(code: string,
		mode: vscode.RuntimeCodeExecutionMode,
		errorBehavior: vscode.RuntimeErrorBehavior): Thenable<string> {

		this._channel.appendLine(`Sending code to ${this.metadata.language}: ${code}`);

		// Forward execution request to the kernel
		return this._kernel.execute(code, mode, errorBehavior);
	}

	public interrupt(): void {
		this._channel.appendLine(`Interrupting ${this.metadata.language}`);

		throw new Error('Method not implemented.');
	}

	/**
	 * Starts a new instance of the language runtime.
	 *
	 * @returns A promise with information about the newly started runtime.
	 */
	public start(): Thenable<vscode.LanguageRuntimeInfo> {
		this._channel.appendLine(`Starting ${this.metadata.language}...`);

		return new Promise<vscode.LanguageRuntimeInfo>((resolve, reject) => {
			// Reject if the kernel is already running; only in the Unintialized state
			// can we start the kernel
			if (this._kernel.status() !== vscode.RuntimeState.Uninitialized) {
				this._channel.appendLine(`Not started (already running)`);
				reject('Kernel is already running');
			}

			// Attempt to start the kernel
			this._kernel.start().then(() => {
				this._channel.appendLine(`Sending info request to ${this.metadata.language}`);
				// Send a kernel_info_request to get the kernel info
				this._kernel.sendInfoRequest();

				// Wait for the kernel_info_reply to come back
				this._kernel.once('message', (msg: JupyterMessagePacket) => {
					if (msg.msgType === 'kernel_info_reply') {
						const message = msg.message as JupyterKernelInfoReply;
						resolve({
							banner: message.banner,
							implementation_version: message.implementation_version,
							language_version: message.language_info.version,
						} as vscode.LanguageRuntimeInfo);
					} else {
						reject('Unexpected message type: ' + msg.msgType);
					}
				});
			});
		});
	}

	public restart(): void {
		this._kernel.shutdown(true);
		this._kernel.start();
	}

	public shutdown(): void {
		this._kernel.shutdown(false);
	}

	onMessage(msg: JupyterMessagePacket) {
		const message = msg.message;
		switch (msg.msgType) {
			case 'display_data':
				this.onDisplayData(msg, message as JupyterDisplayData);
				break;
			case 'execute_result':
				this.onExecuteResult(msg, message as JupyterExecuteResult);
				break;
			case 'execute_input':
				this.onExecuteInput(msg, message as JupyterExecuteInput);
				break;
		}
	}

	/**
	 * Converts a Jupyter display_data message to a LanguageRuntimeMessage and
	 * emits it.
	 *
	 * @param message The message packet
	 * @param data The display_data message
	 */
	onDisplayData(message: JupyterMessagePacket, data: JupyterDisplayData) {
		this._messages.fire({
			id: message.msgId,
			parent_id: message.originId,
			type: vscode.LanguageRuntimeMessageType.Output,
			data: data.data as any
		} as vscode.LanguageRuntimeOutput);
	}

	/**
	 * Converts a Jupyter execute_result message to a LanguageRuntimeMessage and
	 * emits it.
	 *
	 * @param message The message packet
	 * @param data The execute_result message
	 */
	onExecuteResult(message: JupyterMessagePacket, data: JupyterExecuteResult) {
		this._messages.fire({
			id: message.msgId,
			parent_id: message.originId,
			type: vscode.LanguageRuntimeMessageType.Output,
			data: data.data as any
		} as vscode.LanguageRuntimeOutput);
	}

	/**
	 * Converts a Jupyter execute_input message to a LanguageRuntimeMessage and
	 * emits it.
	 *
	 * @param message The message packet
	 * @param data The execute_input message
	 */
	onExecuteInput(message: JupyterMessagePacket, data: JupyterExecuteInput) {
		this._messages.fire({
			id: message.msgId,
			parent_id: message.originId,
			type: vscode.LanguageRuntimeMessageType.Input,
			code: data.code
		} as vscode.LanguageRuntimeInput);
	}

	/**
	 * Converts a Jupyter status message to a RuntimeState and emits it.
	 *
	 * @param status The new status of the kernel
	 */
	onStatus(status: vscode.RuntimeState) {
		this._state.fire(status);
	}

	public dispose() {
		this.shutdown();
	}
}
