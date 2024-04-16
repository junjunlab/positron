/*---------------------------------------------------------------------------------------------
 *  Copyright (C) 2024 Posit Software, PBC. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

// React.
import * as React from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';  // eslint-disable-line no-duplicate-imports

// Other dependencies.
import { localize } from 'vs/nls';
import { useNewProjectWizardContext } from 'vs/workbench/browser/positronNewProjectWizard/newProjectWizardContext';
import { URI } from 'vs/base/common/uri';
import { NewProjectType, NewProjectWizardStep } from 'vs/workbench/browser/positronNewProjectWizard/interfaces/newProjectWizardEnums';
import { NewProjectWizardStepProps } from 'vs/workbench/browser/positronNewProjectWizard/interfaces/newProjectWizardStepProps';
import { PositronWizardStep } from 'vs/workbench/browser/positronNewProjectWizard/components/wizardStep';
import { PositronWizardSubStep } from 'vs/workbench/browser/positronNewProjectWizard/components/wizardSubStep';
import { LabeledTextInput } from 'vs/workbench/browser/positronComponents/positronModalDialog/components/labeledTextInput';
import { LabeledFolderInput } from 'vs/workbench/browser/positronComponents/positronModalDialog/components/labeledFolderInput';
import { Checkbox } from 'vs/workbench/browser/positronComponents/positronModalDialog/components/checkbox';
import { WizardFormattedText, WizardFormattedTextItem, WizardFormattedTextType } from 'vs/workbench/browser/positronNewProjectWizard/components/wizardFormattedText';
import { isExistingDirectory } from 'vs/workbench/browser/positronNewProjectWizard/utilities/projectNameUtils';

/**
 * The ProjectNameLocationStep component is the second step in the new project wizard.
 * This component is shared by all project types. The next step in the wizard is determined by the
 * selected project type.
 * @param props The NewProjectWizardStepProps
 * @returns The rendered component
 */
export const ProjectNameLocationStep = (props: PropsWithChildren<NewProjectWizardStepProps>) => {
	// Retrieve the wizard state and project configuration.
	const newProjectWizardState = useNewProjectWizardContext();
	const projectConfig = newProjectWizardState.projectConfig;
	const setProjectConfig = newProjectWizardState.setProjectConfig;
	const fileDialogs = newProjectWizardState.fileDialogService;
	const fileService = newProjectWizardState.fileService;

	// Hooks.
	const [projectNameFeedback, setProjectNameFeedback] = useState<
		WizardFormattedTextItem | undefined>(
			undefined
		);

	// Hook to initialize the project name feedback if the default
	// project name is an existing directory.
	useEffect(() => {
		const initProjectNameFeedback = async () => {
			if (await isExistingDirectory(
				projectConfig.projectName,
				projectConfig.parentFolder,
				newProjectWizardState.pathService,
				fileService)
			) {
				setProjectNameFeedback({
					type: WizardFormattedTextType.Warning,
					text: localize(
						'projectNameLocationSubStep.projectName.feedback.existingDirectory',
						'The directory `{0}` already exists and will be used for the new project',
						projectConfig.projectName
					)
				});
			}
		};
		initProjectNameFeedback();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Set the project name and update the project name feedback.
	const setProjectName = async (projectName: string) => {
		const projectNameCleaned = projectName.trim();
		setProjectConfig({ ...projectConfig, projectName: projectNameCleaned });
		if (!projectNameCleaned) {
			setProjectNameFeedback({
				type: WizardFormattedTextType.Error,
				text: localize(
					'projectNameLocationSubStep.projectName.feedback.emptyProjectName',
					'Please enter a project name'
				)
			});
		} else {
			if (await isExistingDirectory(
				projectNameCleaned,
				projectConfig.parentFolder,
				newProjectWizardState.pathService,
				fileService)
			) {
				setProjectNameFeedback({
					type: WizardFormattedTextType.Warning,
					text: localize(
						'projectNameLocationSubStep.projectName.feedback.existingDirectory',
						'The directory `{0}` already exists and will be used for the new project',
						projectNameCleaned
					)
				});
			} else {
				setProjectNameFeedback(undefined);
			}
		}
	};

	// The browse handler.
	const browseHandler = async () => {
		// Show the open dialog.
		const uri = await fileDialogs.showOpenDialog({
			defaultUri: URI.file(projectConfig.parentFolder),
			canSelectFiles: false,
			canSelectFolders: true,
			canSelectMany: false,
		});

		// If the user made a selection, set the parent directory.
		if (uri?.length) {
			setProjectConfig({ ...projectConfig, parentFolder: uri[0].fsPath });
		}
	};

	// Navigate to the next step in the wizard, based on the selected project type.
	const nextStep = () => {
		switch (projectConfig.projectType) {
			case NewProjectType.RProject:
				props.next(NewProjectWizardStep.RConfiguration);
				break;
			case NewProjectType.JupyterNotebook:
			case NewProjectType.PythonProject:
				props.next(NewProjectWizardStep.PythonEnvironment);
		}
	};

	return (
		<PositronWizardStep
			title={(() => localize(
				'projectNameLocationStep.title',
				'Set project name and location'
			))()}
			cancelButtonConfig={{ onClick: props.cancel }}
			nextButtonConfig={{
				onClick: nextStep,
				disable: !projectConfig.projectName || !projectConfig.parentFolder
			}}
			backButtonConfig={{ onClick: props.back }}
		>
			<PositronWizardSubStep
				title={(() => localize(
					'projectNameLocationSubStep.projectName.label',
					'Project Name'
				))()}
				feedback={projectNameFeedback
					? () =>
						<WizardFormattedText type={projectNameFeedback.type}>
							{projectNameFeedback.text}
						</WizardFormattedText>
					: undefined
				}
			>
				<LabeledTextInput
					label={(() => localize(
						'projectNameLocationSubStep.projectName.description',
						'Enter a name for your new {0}',
						projectConfig.projectType
					))()}
					autoFocus
					value={projectConfig.projectName}
					onChange={e => setProjectName(e.target.value)}
					type='text'
					error={
						projectNameFeedback &&
						projectNameFeedback.type === WizardFormattedTextType.Error
					}
				/>
			</PositronWizardSubStep>
			<PositronWizardSubStep
				title={(() => localize(
					'projectNameLocationSubStep.parentDirectory.label',
					'Parent Directory'
				))()}
				feedback={() =>
					<WizardFormattedText type={WizardFormattedTextType.Info}>
						{(() => localize(
							'projectNameLocationSubStep.parentDirectory.feedback',
							'Your project will be created at: ',
						))()}
						<code>{projectConfig.parentFolder}/{projectConfig.projectName}</code>
					</WizardFormattedText>
				}
			>
				<LabeledFolderInput
					label={(() => localize(
						'projectNameLocationSubStep.parentDirectory.description',
						'Select a directory to create your project in'
					))()}
					value={projectConfig.parentFolder}
					onBrowse={browseHandler}
					onChange={e => setProjectConfig({ ...projectConfig, parentFolder: e.target.value })}
				/>
			</PositronWizardSubStep>
			<PositronWizardSubStep>
				{/* TODO: display a warning/message if the user doesn't have git set up */}
				<Checkbox
					label={(() => localize(
						'projectNameLocationSubStep.initGitRepo.label',
						'Initialize project as Git repository'
					))()}
					onChanged={checked => setProjectConfig({ ...projectConfig, initGitRepo: checked })}
				/>
			</PositronWizardSubStep>
		</PositronWizardStep>
	);
};
