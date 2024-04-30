/*---------------------------------------------------------------------------------------------
 *  Copyright (C) 2024 Posit Software, PBC. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { localize } from 'vs/nls';
import { IConfigurationService } from 'vs/platform/configuration/common/configuration';
import {
	ConfigurationScope,
	Extensions,
	IConfigurationRegistry,
} from 'vs/platform/configuration/common/configurationRegistry';
import { IContextKeyService } from 'vs/platform/contextkey/common/contextkey';
import { IsDevelopmentContext } from 'vs/platform/contextkey/common/contextkeys';
import { Registry } from 'vs/platform/registry/common/platform';
import { positronConfigurationNodeBase } from 'vs/workbench/services/languageRuntime/common/languageRuntime';

/**
 * This config setting is used to determine whether to use the Positron Project Wizard based on the
 * user's selection in Settings. This flag is used while the New Project Wizard is being developed,
 * to manually enable the wizard in release builds.
 */

// Key for the configuration setting that determines whether to use the Positron Project Wizard
export const USE_POSITRON_PROJECT_WIZARD_CONFIG_KEY =
	'positron.projectWizardEnabled';

/**
 * Return true if in a development build, or retrieve the value of the configuration setting that
 * determines whether to use the Positron Project Wizard.
 * @param contextKeyService The context key service
 * @param configurationService The configuration service
 * @returns Whether to enable the Positron Project Wizard
 */
export function projectWizardEnabled(
	contextKeyService: IContextKeyService,
	configurationService: IConfigurationService
) {
	return (
		IsDevelopmentContext.getValue(contextKeyService) ||
		Boolean(
			configurationService.getValue(USE_POSITRON_PROJECT_WIZARD_CONFIG_KEY)
		)
	);
}

// Register the configuration setting that determines whether to use the Positron Project Wizard
const configurationRegistry = Registry.as<IConfigurationRegistry>(
	Extensions.Configuration
);
configurationRegistry.registerConfiguration({
	...positronConfigurationNodeBase,
	scope: ConfigurationScope.MACHINE_OVERRIDABLE,
	properties: {
		[USE_POSITRON_PROJECT_WIZARD_CONFIG_KEY]: {
			type: 'boolean',
			default: false,
			markdownDescription: localize(
				'positron.enablePositronProjectWizard',
				'Enable the Positron Project Wizard for creating new projects.'
			),
		},
	},
});
