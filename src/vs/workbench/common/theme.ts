/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { localize } from 'vs/nls';
import { registerColor, editorBackground, contrastBorder, transparent, editorWidgetBackground, textLinkForeground, lighten, darken, focusBorder, activeContrastBorder, editorWidgetForeground, editorErrorForeground, editorWarningForeground, editorInfoForeground, treeIndentGuidesStroke, errorForeground, listActiveSelectionBackground, listActiveSelectionForeground, editorForeground, toolbarHoverBackground } from 'vs/platform/theme/common/colorRegistry';
import { IColorTheme } from 'vs/platform/theme/common/themeService';
import { Color } from 'vs/base/common/color';
import { ColorScheme } from 'vs/platform/theme/common/theme';

// < --- Workbench (not customizable) --- >

export function WORKBENCH_BACKGROUND(theme: IColorTheme): Color {
	switch (theme.type) {
		case ColorScheme.LIGHT:
			return Color.fromHex('#F3F3F3');
		case ColorScheme.HIGH_CONTRAST_LIGHT:
			return Color.fromHex('#FFFFFF');
		case ColorScheme.HIGH_CONTRAST_DARK:
			return Color.fromHex('#000000');
		default:
			return Color.fromHex('#252526');
	}
}

// < --- Tabs --- >

//#region Tab Background

export const TAB_ACTIVE_BACKGROUND = registerColor('tab.activeBackground', {
	dark: editorBackground,
	light: editorBackground,
	hcDark: editorBackground,
	hcLight: editorBackground
}, localize('tabActiveBackground', "Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_ACTIVE_BACKGROUND = registerColor('tab.unfocusedActiveBackground', {
	dark: TAB_ACTIVE_BACKGROUND,
	light: TAB_ACTIVE_BACKGROUND,
	hcDark: TAB_ACTIVE_BACKGROUND,
	hcLight: TAB_ACTIVE_BACKGROUND,
}, localize('tabUnfocusedActiveBackground', "Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_BACKGROUND = registerColor('tab.inactiveBackground', {
	dark: '#2D2D2D',
	light: '#ECECEC',
	hcDark: null,
	hcLight: null,
}, localize('tabInactiveBackground', "Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_INACTIVE_BACKGROUND = registerColor('tab.unfocusedInactiveBackground', {
	dark: TAB_INACTIVE_BACKGROUND,
	light: TAB_INACTIVE_BACKGROUND,
	hcDark: TAB_INACTIVE_BACKGROUND,
	hcLight: TAB_INACTIVE_BACKGROUND
}, localize('tabUnfocusedInactiveBackground', "Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

//#endregion

//#region Tab Foreground

export const TAB_ACTIVE_FOREGROUND = registerColor('tab.activeForeground', {
	dark: Color.white,
	light: '#333333',
	hcDark: Color.white,
	hcLight: '#292929'
}, localize('tabActiveForeground', "Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_FOREGROUND = registerColor('tab.inactiveForeground', {
	dark: transparent(TAB_ACTIVE_FOREGROUND, 0.5),
	light: transparent(TAB_ACTIVE_FOREGROUND, 0.7),
	hcDark: Color.white,
	hcLight: '#292929'
}, localize('tabInactiveForeground', "Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_ACTIVE_FOREGROUND = registerColor('tab.unfocusedActiveForeground', {
	dark: transparent(TAB_ACTIVE_FOREGROUND, 0.5),
	light: transparent(TAB_ACTIVE_FOREGROUND, 0.7),
	hcDark: Color.white,
	hcLight: '#292929'
}, localize('tabUnfocusedActiveForeground', "Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_INACTIVE_FOREGROUND = registerColor('tab.unfocusedInactiveForeground', {
	dark: transparent(TAB_INACTIVE_FOREGROUND, 0.5),
	light: transparent(TAB_INACTIVE_FOREGROUND, 0.5),
	hcDark: Color.white,
	hcLight: '#292929'
}, localize('tabUnfocusedInactiveForeground', "Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

//#endregion

//#region Tab Hover Foreground/Background

export const TAB_HOVER_BACKGROUND = registerColor('tab.hoverBackground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('tabHoverBackground', "Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_HOVER_BACKGROUND = registerColor('tab.unfocusedHoverBackground', {
	dark: transparent(TAB_HOVER_BACKGROUND, 0.5),
	light: transparent(TAB_HOVER_BACKGROUND, 0.7),
	hcDark: null,
	hcLight: null
}, localize('tabUnfocusedHoverBackground', "Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_HOVER_FOREGROUND = registerColor('tab.hoverForeground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null,
}, localize('tabHoverForeground', "Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_HOVER_FOREGROUND = registerColor('tab.unfocusedHoverForeground', {
	dark: transparent(TAB_HOVER_FOREGROUND, 0.5),
	light: transparent(TAB_HOVER_FOREGROUND, 0.5),
	hcDark: null,
	hcLight: null
}, localize('tabUnfocusedHoverForeground', "Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

//#endregion

//#region Tab Borders

export const TAB_BORDER = registerColor('tab.border', {
	dark: '#252526',
	light: '#F3F3F3',
	hcDark: contrastBorder,
	hcLight: contrastBorder,
}, localize('tabBorder', "Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_LAST_PINNED_BORDER = registerColor('tab.lastPinnedBorder', {
	dark: treeIndentGuidesStroke,
	light: treeIndentGuidesStroke,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('lastPinnedTabBorder', "Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_ACTIVE_BORDER = registerColor('tab.activeBorder', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('tabActiveBorder', "Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_ACTIVE_BORDER = registerColor('tab.unfocusedActiveBorder', {
	dark: transparent(TAB_ACTIVE_BORDER, 0.5),
	light: transparent(TAB_ACTIVE_BORDER, 0.7),
	hcDark: null,
	hcLight: null
}, localize('tabActiveUnfocusedBorder', "Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_ACTIVE_BORDER_TOP = registerColor('tab.activeBorderTop', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: '#B5200D'
}, localize('tabActiveBorderTop', "Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_ACTIVE_BORDER_TOP = registerColor('tab.unfocusedActiveBorderTop', {
	dark: transparent(TAB_ACTIVE_BORDER_TOP, 0.5),
	light: transparent(TAB_ACTIVE_BORDER_TOP, 0.7),
	hcDark: null,
	hcLight: '#B5200D'
}, localize('tabActiveUnfocusedBorderTop', "Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_HOVER_BORDER = registerColor('tab.hoverBorder', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('tabHoverBorder', "Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_HOVER_BORDER = registerColor('tab.unfocusedHoverBorder', {
	dark: transparent(TAB_HOVER_BORDER, 0.5),
	light: transparent(TAB_HOVER_BORDER, 0.7),
	hcDark: null,
	hcLight: contrastBorder
}, localize('tabUnfocusedHoverBorder', "Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

//#endregion

//#region Tab Modified Border

export const TAB_ACTIVE_MODIFIED_BORDER = registerColor('tab.activeModifiedBorder', {
	dark: '#3399CC',
	light: '#33AAEE',
	hcDark: null,
	hcLight: contrastBorder
}, localize('tabActiveModifiedBorder', "Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_INACTIVE_MODIFIED_BORDER = registerColor('tab.inactiveModifiedBorder', {
	dark: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5),
	light: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5),
	hcDark: Color.white,
	hcLight: contrastBorder
}, localize('tabInactiveModifiedBorder', "Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_ACTIVE_MODIFIED_BORDER = registerColor('tab.unfocusedActiveModifiedBorder', {
	dark: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.5),
	light: transparent(TAB_ACTIVE_MODIFIED_BORDER, 0.7),
	hcDark: Color.white,
	hcLight: contrastBorder
}, localize('unfocusedActiveModifiedBorder', "Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

export const TAB_UNFOCUSED_INACTIVE_MODIFIED_BORDER = registerColor('tab.unfocusedInactiveModifiedBorder', {
	dark: transparent(TAB_INACTIVE_MODIFIED_BORDER, 0.5),
	light: transparent(TAB_INACTIVE_MODIFIED_BORDER, 0.5),
	hcDark: Color.white,
	hcLight: contrastBorder
}, localize('unfocusedINactiveModifiedBorder', "Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."));

//#endregion

// < --- Editors --- >

export const EDITOR_PANE_BACKGROUND = registerColor('editorPane.background', {
	dark: editorBackground,
	light: editorBackground,
	hcDark: editorBackground,
	hcLight: editorBackground
}, localize('editorPaneBackground', "Background color of the editor pane visible on the left and right side of the centered editor layout."));

export const EDITOR_GROUP_EMPTY_BACKGROUND = registerColor('editorGroup.emptyBackground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('editorGroupEmptyBackground', "Background color of an empty editor group. Editor groups are the containers of editors."));

export const EDITOR_GROUP_FOCUSED_EMPTY_BORDER = registerColor('editorGroup.focusedEmptyBorder', {
	dark: null,
	light: null,
	hcDark: focusBorder,
	hcLight: focusBorder
}, localize('editorGroupFocusedEmptyBorder', "Border color of an empty editor group that is focused. Editor groups are the containers of editors."));

export const EDITOR_GROUP_HEADER_TABS_BACKGROUND = registerColor('editorGroupHeader.tabsBackground', {
	dark: '#252526',
	light: '#F3F3F3',
	hcDark: null,
	hcLight: null
}, localize('tabsContainerBackground', "Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors."));

export const EDITOR_GROUP_HEADER_TABS_BORDER = registerColor('editorGroupHeader.tabsBorder', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('tabsContainerBorder', "Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors."));

export const EDITOR_GROUP_HEADER_NO_TABS_BACKGROUND = registerColor('editorGroupHeader.noTabsBackground', {
	dark: editorBackground,
	light: editorBackground,
	hcDark: editorBackground,
	hcLight: editorBackground
}, localize('editorGroupHeaderBackground', "Background color of the editor group title header when tabs are disabled (`\"workbench.editor.showTabs\": false`). Editor groups are the containers of editors."));

export const EDITOR_GROUP_HEADER_BORDER = registerColor('editorGroupHeader.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('editorTitleContainerBorder', "Border color of the editor group title header. Editor groups are the containers of editors."));

export const EDITOR_GROUP_BORDER = registerColor('editorGroup.border', {
	dark: '#444444',
	light: '#E7E7E7',
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('editorGroupBorder', "Color to separate multiple editor groups from each other. Editor groups are the containers of editors."));

export const EDITOR_DRAG_AND_DROP_BACKGROUND = registerColor('editorGroup.dropBackground', {
	dark: Color.fromHex('#53595D').transparent(0.5),
	light: Color.fromHex('#2677CB').transparent(0.18),
	hcDark: null,
	hcLight: Color.fromHex('#0F4A85').transparent(0.50)
}, localize('editorDragAndDropBackground', "Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through."));

export const EDITOR_DROP_INTO_PROMPT_FOREGROUND = registerColor('editorGroup.dropIntoPromptForeground', {
	dark: editorWidgetForeground,
	light: editorWidgetForeground,
	hcDark: editorWidgetForeground,
	hcLight: editorWidgetForeground
}, localize('editorDropIntoPromptForeground', "Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."));

export const EDITOR_DROP_INTO_PROMPT_BACKGROUND = registerColor('editorGroup.dropIntoPromptBackground', {
	dark: editorWidgetBackground,
	light: editorWidgetBackground,
	hcDark: editorWidgetBackground,
	hcLight: editorWidgetBackground
}, localize('editorDropIntoPromptBackground', "Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."));

export const EDITOR_DROP_INTO_PROMPT_BORDER = registerColor('editorGroup.dropIntoPromptBorder', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('editorDropIntoPromptBorder', "Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."));

export const SIDE_BY_SIDE_EDITOR_HORIZONTAL_BORDER = registerColor('sideBySideEditor.horizontalBorder', {
	dark: EDITOR_GROUP_BORDER,
	light: EDITOR_GROUP_BORDER,
	hcDark: EDITOR_GROUP_BORDER,
	hcLight: EDITOR_GROUP_BORDER
}, localize('sideBySideEditor.horizontalBorder', "Color to separate two editors from each other when shown side by side in an editor group from top to bottom."));

export const SIDE_BY_SIDE_EDITOR_VERTICAL_BORDER = registerColor('sideBySideEditor.verticalBorder', {
	dark: EDITOR_GROUP_BORDER,
	light: EDITOR_GROUP_BORDER,
	hcDark: EDITOR_GROUP_BORDER,
	hcLight: EDITOR_GROUP_BORDER
}, localize('sideBySideEditor.verticalBorder', "Color to separate two editors from each other when shown side by side in an editor group from left to right."));

// < --- Panels --- >

export const PANEL_BACKGROUND = registerColor('panel.background', {
	dark: editorBackground,
	light: editorBackground,
	hcDark: editorBackground,
	hcLight: editorBackground
}, localize('panelBackground', "Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_BORDER = registerColor('panel.border', {
	dark: Color.fromHex('#808080').transparent(0.35),
	light: Color.fromHex('#808080').transparent(0.35),
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('panelBorder', "Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_ACTIVE_TITLE_FOREGROUND = registerColor('panelTitle.activeForeground', {
	dark: '#E7E7E7',
	light: '#424242',
	hcDark: Color.white,
	hcLight: editorForeground
}, localize('panelActiveTitleForeground', "Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_INACTIVE_TITLE_FOREGROUND = registerColor('panelTitle.inactiveForeground', {
	dark: transparent(PANEL_ACTIVE_TITLE_FOREGROUND, 0.6),
	light: transparent(PANEL_ACTIVE_TITLE_FOREGROUND, 0.75),
	hcDark: Color.white,
	hcLight: editorForeground
}, localize('panelInactiveTitleForeground', "Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_ACTIVE_TITLE_BORDER = registerColor('panelTitle.activeBorder', {
	dark: PANEL_ACTIVE_TITLE_FOREGROUND,
	light: PANEL_ACTIVE_TITLE_FOREGROUND,
	hcDark: contrastBorder,
	hcLight: '#B5200D'
}, localize('panelActiveTitleBorder', "Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal."));

export const PANEL_INPUT_BORDER = registerColor('panelInput.border', {
	dark: null,
	light: Color.fromHex('#ddd'),
	hcDark: null,
	hcLight: null
}, localize('panelInputBorder', "Input box border for inputs in the panel."));

export const PANEL_DRAG_AND_DROP_BORDER = registerColor('panel.dropBorder', {
	dark: PANEL_ACTIVE_TITLE_FOREGROUND,
	light: PANEL_ACTIVE_TITLE_FOREGROUND,
	hcDark: PANEL_ACTIVE_TITLE_FOREGROUND,
	hcLight: PANEL_ACTIVE_TITLE_FOREGROUND
}, localize('panelDragAndDropBorder', "Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal."));


export const PANEL_SECTION_DRAG_AND_DROP_BACKGROUND = registerColor('panelSection.dropBackground', {
	dark: EDITOR_DRAG_AND_DROP_BACKGROUND,
	light: EDITOR_DRAG_AND_DROP_BACKGROUND,
	hcDark: EDITOR_DRAG_AND_DROP_BACKGROUND,
	hcLight: EDITOR_DRAG_AND_DROP_BACKGROUND
}, localize('panelSectionDragAndDropBackground', "Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."));

export const PANEL_SECTION_HEADER_BACKGROUND = registerColor('panelSectionHeader.background', {
	dark: Color.fromHex('#808080').transparent(0.2),
	light: Color.fromHex('#808080').transparent(0.2),
	hcDark: null,
	hcLight: null,
}, localize('panelSectionHeaderBackground', "Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."));

export const PANEL_SECTION_HEADER_FOREGROUND = registerColor('panelSectionHeader.foreground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('panelSectionHeaderForeground', "Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."));

export const PANEL_SECTION_HEADER_BORDER = registerColor('panelSectionHeader.border', {
	dark: contrastBorder,
	light: contrastBorder,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('panelSectionHeaderBorder', "Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."));

export const PANEL_SECTION_BORDER = registerColor('panelSection.border', {
	dark: PANEL_BORDER,
	light: PANEL_BORDER,
	hcDark: PANEL_BORDER,
	hcLight: PANEL_BORDER
}, localize('panelSectionBorder', "Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."));

// < --- Banner --- >

export const BANNER_BACKGROUND = registerColor('banner.background', {
	dark: listActiveSelectionBackground,
	light: darken(listActiveSelectionBackground, 0.3),
	hcDark: listActiveSelectionBackground,
	hcLight: listActiveSelectionBackground
}, localize('banner.background', "Banner background color. The banner is shown under the title bar of the window."));

export const BANNER_FOREGROUND = registerColor('banner.foreground', {
	dark: listActiveSelectionForeground,
	light: listActiveSelectionForeground,
	hcDark: listActiveSelectionForeground,
	hcLight: listActiveSelectionForeground
}, localize('banner.foreground', "Banner foreground color. The banner is shown under the title bar of the window."));

export const BANNER_ICON_FOREGROUND = registerColor('banner.iconForeground', {
	dark: editorInfoForeground,
	light: editorInfoForeground,
	hcDark: editorInfoForeground,
	hcLight: editorInfoForeground
}, localize('banner.iconForeground', "Banner icon color. The banner is shown under the title bar of the window."));

// < --- Status --- >

export const STATUS_BAR_FOREGROUND = registerColor('statusBar.foreground', {
	dark: '#FFFFFF',
	light: '#FFFFFF',
	hcDark: '#FFFFFF',
	hcLight: editorForeground
}, localize('statusBarForeground', "Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_NO_FOLDER_FOREGROUND = registerColor('statusBar.noFolderForeground', {
	dark: STATUS_BAR_FOREGROUND,
	light: STATUS_BAR_FOREGROUND,
	hcDark: STATUS_BAR_FOREGROUND,
	hcLight: STATUS_BAR_FOREGROUND
}, localize('statusBarNoFolderForeground', "Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_BACKGROUND = registerColor('statusBar.background', {
	// --- Start Positron ---
	// dark: '#007ACC',
	// light: '#007ACC',
	dark: '#3b4144',
	light: '#f5f7fa',
	// --- End Positron ---
	hcDark: null,
	hcLight: null,
}, localize('statusBarBackground', "Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_NO_FOLDER_BACKGROUND = registerColor('statusBar.noFolderBackground', {
	dark: '#68217A',
	light: '#68217A',
	hcDark: null,
	hcLight: null,
}, localize('statusBarNoFolderBackground', "Status bar background color when no folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_BORDER = registerColor('statusBar.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('statusBarBorder', "Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_FOCUS_BORDER = registerColor('statusBar.focusBorder', {
	dark: STATUS_BAR_FOREGROUND,
	light: STATUS_BAR_FOREGROUND,
	hcDark: null,
	hcLight: STATUS_BAR_FOREGROUND
}, localize('statusBarFocusBorder', "Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_NO_FOLDER_BORDER = registerColor('statusBar.noFolderBorder', {
	dark: STATUS_BAR_BORDER,
	light: STATUS_BAR_BORDER,
	hcDark: STATUS_BAR_BORDER,
	hcLight: STATUS_BAR_BORDER
}, localize('statusBarNoFolderBorder', "Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_ACTIVE_BACKGROUND = registerColor('statusBarItem.activeBackground', {
	dark: Color.white.transparent(0.18),
	light: Color.white.transparent(0.18),
	hcDark: Color.white.transparent(0.18),
	hcLight: Color.black.transparent(0.18)
}, localize('statusBarItemActiveBackground', "Status bar item background color when clicking. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_FOCUS_BORDER = registerColor('statusBarItem.focusBorder', {
	dark: STATUS_BAR_FOREGROUND,
	light: STATUS_BAR_FOREGROUND,
	hcDark: null,
	hcLight: activeContrastBorder
}, localize('statusBarItemFocusBorder', "Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_HOVER_BACKGROUND = registerColor('statusBarItem.hoverBackground', {
	dark: Color.white.transparent(0.12),
	light: Color.white.transparent(0.12),
	hcDark: Color.white.transparent(0.12),
	hcLight: Color.black.transparent(0.12)
}, localize('statusBarItemHoverBackground', "Status bar item background color when hovering. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ITEM_COMPACT_HOVER_BACKGROUND = registerColor('statusBarItem.compactHoverBackground', {
	dark: Color.white.transparent(0.20),
	light: Color.white.transparent(0.20),
	hcDark: Color.white.transparent(0.20),
	hcLight: Color.black.transparent(0.20)
}, localize('statusBarItemCompactHoverBackground', "Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_PROMINENT_ITEM_FOREGROUND = registerColor('statusBarItem.prominentForeground', {
	dark: STATUS_BAR_FOREGROUND,
	light: STATUS_BAR_FOREGROUND,
	hcDark: STATUS_BAR_FOREGROUND,
	hcLight: STATUS_BAR_FOREGROUND
}, localize('statusBarProminentItemForeground', "Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_PROMINENT_ITEM_BACKGROUND = registerColor('statusBarItem.prominentBackground', {
	dark: Color.black.transparent(0.5),
	light: Color.black.transparent(0.5),
	hcDark: Color.black.transparent(0.5),
	hcLight: Color.black.transparent(0.5),
}, localize('statusBarProminentItemBackground', "Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_PROMINENT_ITEM_HOVER_BACKGROUND = registerColor('statusBarItem.prominentHoverBackground', {
	dark: Color.black.transparent(0.3),
	light: Color.black.transparent(0.3),
	hcDark: Color.black.transparent(0.3),
	hcLight: null
}, localize('statusBarProminentItemHoverBackground', "Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ERROR_ITEM_BACKGROUND = registerColor('statusBarItem.errorBackground', {
	dark: darken(errorForeground, .4),
	light: darken(errorForeground, .4),
	hcDark: null,
	hcLight: '#B5200D'
}, localize('statusBarErrorItemBackground', "Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_ERROR_ITEM_FOREGROUND = registerColor('statusBarItem.errorForeground', {
	dark: Color.white,
	light: Color.white,
	hcDark: Color.white,
	hcLight: Color.white
}, localize('statusBarErrorItemForeground', "Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_WARNING_ITEM_BACKGROUND = registerColor('statusBarItem.warningBackground', {
	dark: darken(editorWarningForeground, .4),
	light: darken(editorWarningForeground, .4),
	hcDark: null,
	hcLight: '#895503'
}, localize('statusBarWarningItemBackground', "Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."));

export const STATUS_BAR_WARNING_ITEM_FOREGROUND = registerColor('statusBarItem.warningForeground', {
	dark: Color.white,
	light: Color.white,
	hcDark: Color.white,
	hcLight: Color.white
}, localize('statusBarWarningItemForeground', "Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."));


// < --- Activity Bar --- >

export const ACTIVITY_BAR_BACKGROUND = registerColor('activityBar.background', {
	// --- Start Positron ---
	// dark: '#32485b',
	// light: '#3a78b1',
	dark: '#333333',
	light: '#2C2C2C',
	// --- End Positron ---
	hcDark: '#000000',
	hcLight: '#FFFFFF'
}, localize('activityBarBackground', "Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_FOREGROUND = registerColor('activityBar.foreground', {
	dark: Color.white,
	light: Color.white,
	hcDark: Color.white,
	hcLight: editorForeground
}, localize('activityBarForeground', "Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_INACTIVE_FOREGROUND = registerColor('activityBar.inactiveForeground', {
	dark: transparent(ACTIVITY_BAR_FOREGROUND, 0.4),
	light: transparent(ACTIVITY_BAR_FOREGROUND, 0.4),
	hcDark: Color.white,
	hcLight: editorForeground
}, localize('activityBarInActiveForeground', "Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_BORDER = registerColor('activityBar.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('activityBarBorder', "Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_ACTIVE_BORDER = registerColor('activityBar.activeBorder', {
	dark: ACTIVITY_BAR_FOREGROUND,
	light: ACTIVITY_BAR_FOREGROUND,
	hcDark: null,
	hcLight: contrastBorder
}, localize('activityBarActiveBorder', "Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_ACTIVE_FOCUS_BORDER = registerColor('activityBar.activeFocusBorder', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: '#B5200D'
}, localize('activityBarActiveFocusBorder', "Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_ACTIVE_BACKGROUND = registerColor('activityBar.activeBackground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('activityBarActiveBackground', "Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_DRAG_AND_DROP_BORDER = registerColor('activityBar.dropBorder', {
	dark: ACTIVITY_BAR_FOREGROUND,
	light: ACTIVITY_BAR_FOREGROUND,
	hcDark: null,
	hcLight: null,
}, localize('activityBarDragAndDropBorder', "Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_BADGE_BACKGROUND = registerColor('activityBarBadge.background', {
	dark: '#007ACC',
	light: '#007ACC',
	hcDark: '#000000',
	hcLight: '#0F4A85'
}, localize('activityBarBadgeBackground', "Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_BADGE_FOREGROUND = registerColor('activityBarBadge.foreground', {
	dark: Color.white,
	light: Color.white,
	hcDark: Color.white,
	hcLight: Color.white
}, localize('activityBarBadgeForeground', "Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."));

export const ACTIVITY_BAR_SETTINGS_PROFILE_FOREGROUND = registerColor('activityBarItem.settingsProfilesForeground', {
	dark: ACTIVITY_BAR_INACTIVE_FOREGROUND,
	light: ACTIVITY_BAR_INACTIVE_FOREGROUND,
	hcDark: ACTIVITY_BAR_INACTIVE_FOREGROUND,
	hcLight: ACTIVITY_BAR_INACTIVE_FOREGROUND
}, localize('statusBarItemSettingsProfileForeground', "Foreground color for the settings profile entry on the activity bar."));

export const ACTIVITY_BAR_SETTINGS_PROFILE_HOVER_FOREGROUND = registerColor('activityBarItem.settingsProfilesHoverForeground', {
	dark: ACTIVITY_BAR_FOREGROUND,
	light: ACTIVITY_BAR_FOREGROUND,
	hcDark: ACTIVITY_BAR_FOREGROUND,
	hcLight: ACTIVITY_BAR_FOREGROUND
}, localize('activityBarItem.settingsProfilesHoverForeground', "Foreground color for the settings profile entry on the activity bar when hovering."));

export const ACTIVITY_BAR_SETTINGS_PROFILE_BACKGROUND = registerColor('activityBarItem.settingsProfilesBackground', {
	dark: lighten(ACTIVITY_BAR_BACKGROUND, 0.5),
	light: darken(ACTIVITY_BAR_BACKGROUND, 0.12),
	hcDark: null,
	hcLight: null
}, localize('statusBarItemSettingsProfileBackground', "Background color for the settings profile entry on the activity bar."));

// < --- Remote --- >

export const STATUS_BAR_HOST_NAME_BACKGROUND = registerColor('statusBarItem.remoteBackground', {
	dark: ACTIVITY_BAR_BADGE_BACKGROUND,
	light: ACTIVITY_BAR_BADGE_BACKGROUND,
	hcDark: ACTIVITY_BAR_BADGE_BACKGROUND,
	hcLight: ACTIVITY_BAR_BADGE_BACKGROUND
}, localize('statusBarItemHostBackground', "Background color for the remote indicator on the status bar."));

export const STATUS_BAR_HOST_NAME_FOREGROUND = registerColor('statusBarItem.remoteForeground', {
	dark: ACTIVITY_BAR_BADGE_FOREGROUND,
	light: ACTIVITY_BAR_BADGE_FOREGROUND,
	hcDark: ACTIVITY_BAR_BADGE_FOREGROUND,
	hcLight: ACTIVITY_BAR_BADGE_FOREGROUND
}, localize('statusBarItemHostForeground', "Foreground color for the remote indicator on the status bar."));

export const EXTENSION_BADGE_REMOTE_BACKGROUND = registerColor('extensionBadge.remoteBackground', {
	dark: ACTIVITY_BAR_BADGE_BACKGROUND,
	light: ACTIVITY_BAR_BADGE_BACKGROUND,
	hcDark: ACTIVITY_BAR_BADGE_BACKGROUND,
	hcLight: ACTIVITY_BAR_BADGE_BACKGROUND
}, localize('extensionBadge.remoteBackground', "Background color for the remote badge in the extensions view."));

export const EXTENSION_BADGE_REMOTE_FOREGROUND = registerColor('extensionBadge.remoteForeground', {
	dark: ACTIVITY_BAR_BADGE_FOREGROUND,
	light: ACTIVITY_BAR_BADGE_FOREGROUND,
	hcDark: ACTIVITY_BAR_BADGE_FOREGROUND,
	hcLight: ACTIVITY_BAR_BADGE_FOREGROUND
}, localize('extensionBadge.remoteForeground', "Foreground color for the remote badge in the extensions view."));


// < --- Side Bar --- >

export const SIDE_BAR_BACKGROUND = registerColor('sideBar.background', {
	dark: '#252526',
	light: '#F3F3F3',
	hcDark: '#000000',
	hcLight: '#FFFFFF'
}, localize('sideBarBackground', "Side bar background color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_FOREGROUND = registerColor('sideBar.foreground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('sideBarForeground', "Side bar foreground color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_BORDER = registerColor('sideBar.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('sideBarBorder', "Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_TITLE_FOREGROUND = registerColor('sideBarTitle.foreground', {
	dark: SIDE_BAR_FOREGROUND,
	light: SIDE_BAR_FOREGROUND,
	hcDark: SIDE_BAR_FOREGROUND,
	hcLight: SIDE_BAR_FOREGROUND
}, localize('sideBarTitleForeground', "Side bar title foreground color. The side bar is the container for views like explorer and search."));

export const SIDE_BAR_DRAG_AND_DROP_BACKGROUND = registerColor('sideBar.dropBackground', {
	dark: EDITOR_DRAG_AND_DROP_BACKGROUND,
	light: EDITOR_DRAG_AND_DROP_BACKGROUND,
	hcDark: EDITOR_DRAG_AND_DROP_BACKGROUND,
	hcLight: EDITOR_DRAG_AND_DROP_BACKGROUND
}, localize('sideBarDragAndDropBackground', "Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."));

export const SIDE_BAR_SECTION_HEADER_BACKGROUND = registerColor('sideBarSectionHeader.background', {
	dark: Color.fromHex('#808080').transparent(0.2),
	light: Color.fromHex('#808080').transparent(0.2),
	hcDark: null,
	hcLight: null
}, localize('sideBarSectionHeaderBackground', "Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."));

export const SIDE_BAR_SECTION_HEADER_FOREGROUND = registerColor('sideBarSectionHeader.foreground', {
	dark: SIDE_BAR_FOREGROUND,
	light: SIDE_BAR_FOREGROUND,
	hcDark: SIDE_BAR_FOREGROUND,
	hcLight: SIDE_BAR_FOREGROUND
}, localize('sideBarSectionHeaderForeground', "Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."));

export const SIDE_BAR_SECTION_HEADER_BORDER = registerColor('sideBarSectionHeader.border', {
	dark: contrastBorder,
	light: contrastBorder,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('sideBarSectionHeaderBorder', "Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."));


// < --- Title Bar --- >

export const TITLE_BAR_ACTIVE_FOREGROUND = registerColor('titleBar.activeForeground', {
	dark: '#CCCCCC',
	light: '#333333',
	hcDark: '#FFFFFF',
	hcLight: '#292929'
}, localize('titleBarActiveForeground', "Title bar foreground when the window is active."));

export const TITLE_BAR_INACTIVE_FOREGROUND = registerColor('titleBar.inactiveForeground', {
	dark: transparent(TITLE_BAR_ACTIVE_FOREGROUND, 0.6),
	light: transparent(TITLE_BAR_ACTIVE_FOREGROUND, 0.6),
	hcDark: null,
	hcLight: '#292929'
}, localize('titleBarInactiveForeground', "Title bar foreground when the window is inactive."));

export const TITLE_BAR_ACTIVE_BACKGROUND = registerColor('titleBar.activeBackground', {
	dark: '#3C3C3C',
	light: '#DDDDDD',
	hcDark: '#000000',
	hcLight: '#FFFFFF'
}, localize('titleBarActiveBackground', "Title bar background when the window is active."));

export const TITLE_BAR_INACTIVE_BACKGROUND = registerColor('titleBar.inactiveBackground', {
	dark: transparent(TITLE_BAR_ACTIVE_BACKGROUND, 0.6),
	light: transparent(TITLE_BAR_ACTIVE_BACKGROUND, 0.6),
	hcDark: null,
	hcLight: null,
}, localize('titleBarInactiveBackground', "Title bar background when the window is inactive."));

export const TITLE_BAR_BORDER = registerColor('titleBar.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('titleBarBorder', "Title bar border color."));

// < --- Menubar --- >

export const MENUBAR_SELECTION_FOREGROUND = registerColor('menubar.selectionForeground', {
	dark: TITLE_BAR_ACTIVE_FOREGROUND,
	light: TITLE_BAR_ACTIVE_FOREGROUND,
	hcDark: TITLE_BAR_ACTIVE_FOREGROUND,
	hcLight: TITLE_BAR_ACTIVE_FOREGROUND,
}, localize('menubarSelectionForeground', "Foreground color of the selected menu item in the menubar."));

export const MENUBAR_SELECTION_BACKGROUND = registerColor('menubar.selectionBackground', {
	dark: toolbarHoverBackground,
	light: toolbarHoverBackground,
	hcDark: null,
	hcLight: null,
}, localize('menubarSelectionBackground', "Background color of the selected menu item in the menubar."));

export const MENUBAR_SELECTION_BORDER = registerColor('menubar.selectionBorder', {
	dark: null,
	light: null,
	hcDark: activeContrastBorder,
	hcLight: activeContrastBorder,
}, localize('menubarSelectionBorder', "Border color of the selected menu item in the menubar."));

// < --- Notifications --- >

export const NOTIFICATIONS_CENTER_BORDER = registerColor('notificationCenter.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('notificationCenterBorder', "Notifications center border color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_TOAST_BORDER = registerColor('notificationToast.border', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('notificationToastBorder', "Notification toast border color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_FOREGROUND = registerColor('notifications.foreground', {
	dark: editorWidgetForeground,
	light: editorWidgetForeground,
	hcDark: editorWidgetForeground,
	hcLight: editorWidgetForeground
}, localize('notificationsForeground', "Notifications foreground color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_BACKGROUND = registerColor('notifications.background', {
	dark: editorWidgetBackground,
	light: editorWidgetBackground,
	hcDark: editorWidgetBackground,
	hcLight: editorWidgetBackground
}, localize('notificationsBackground', "Notifications background color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_LINKS = registerColor('notificationLink.foreground', {
	dark: textLinkForeground,
	light: textLinkForeground,
	hcDark: textLinkForeground,
	hcLight: textLinkForeground
}, localize('notificationsLink', "Notification links foreground color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_CENTER_HEADER_FOREGROUND = registerColor('notificationCenterHeader.foreground', {
	dark: null,
	light: null,
	hcDark: null,
	hcLight: null
}, localize('notificationCenterHeaderForeground', "Notifications center header foreground color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_CENTER_HEADER_BACKGROUND = registerColor('notificationCenterHeader.background', {
	dark: lighten(NOTIFICATIONS_BACKGROUND, 0.3),
	light: darken(NOTIFICATIONS_BACKGROUND, 0.05),
	hcDark: NOTIFICATIONS_BACKGROUND,
	hcLight: NOTIFICATIONS_BACKGROUND
}, localize('notificationCenterHeaderBackground', "Notifications center header background color. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_BORDER = registerColor('notifications.border', {
	dark: NOTIFICATIONS_CENTER_HEADER_BACKGROUND,
	light: NOTIFICATIONS_CENTER_HEADER_BACKGROUND,
	hcDark: NOTIFICATIONS_CENTER_HEADER_BACKGROUND,
	hcLight: NOTIFICATIONS_CENTER_HEADER_BACKGROUND
}, localize('notificationsBorder', "Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_ERROR_ICON_FOREGROUND = registerColor('notificationsErrorIcon.foreground', {
	dark: editorErrorForeground,
	light: editorErrorForeground,
	hcDark: editorErrorForeground,
	hcLight: editorErrorForeground
}, localize('notificationsErrorIconForeground', "The color used for the icon of error notifications. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_WARNING_ICON_FOREGROUND = registerColor('notificationsWarningIcon.foreground', {
	dark: editorWarningForeground,
	light: editorWarningForeground,
	hcDark: editorWarningForeground,
	hcLight: editorWarningForeground
}, localize('notificationsWarningIconForeground', "The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window."));

export const NOTIFICATIONS_INFO_ICON_FOREGROUND = registerColor('notificationsInfoIcon.foreground', {
	dark: editorInfoForeground,
	light: editorInfoForeground,
	hcDark: editorInfoForeground,
	hcLight: editorInfoForeground
}, localize('notificationsInfoIconForeground', "The color used for the icon of info notifications. Notifications slide in from the bottom right of the window."));

export const WINDOW_ACTIVE_BORDER = registerColor('window.activeBorder', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('windowActiveBorder', "The color used for the border of the window when it is active. Only supported in the macOS and Linux desktop client when using the custom title bar."));

export const WINDOW_INACTIVE_BORDER = registerColor('window.inactiveBorder', {
	dark: null,
	light: null,
	hcDark: contrastBorder,
	hcLight: contrastBorder
}, localize('windowInactiveBorder', "The color used for the border of the window when it is inactive. Only supported in the macOS and Linux desktop client when using the custom title bar."));

// --- Start Positron ---

// < --- Top Bar --- >

export const TOP_BAR_BACKGROUND = registerColor('topBar.background', {
	dark: '#3b4144',
	light: '#f5f7fa',
	hcDark: '#3b4144',
	hcLight: '#f5f7fa'
}, localize('topBar.background', "Top bar background color. The top bar is shown under the title bar of the window."));

// < --- Auxiliary Activity Bar --- >

// The auxiliary activity bar background color.
const AUXILIARY_ACTIVITY_BAR_BACKGROUND_COLOR_ID = 'auxiliaryActivityBar.background';
export const AUXILIARY_ACTIVITY_BAR_BACKGROUND = registerColor(AUXILIARY_ACTIVITY_BAR_BACKGROUND_COLOR_ID, {
	dark: '#32485b',
	light: '#3a78b1',
	hcDark: '#32485b',
	hcLight: '#3a78b1'
}, localize(AUXILIARY_ACTIVITY_BAR_BACKGROUND_COLOR_ID, "Auxiliary activity bar background color. The auxiliary activity bar is shown on the far left or far right of the workspace, opposing the activity bar, and allows the user to switch between auxiliary views."));

// The auxiliary activity bar action container on background color.
const AUXILIARY_ACTIVITY_BAR_ACTION_CONTAINER_TOGGLED_BACKGROUND_ID = 'auxiliaryActivityBar.actionContainerToggledBackground';
export const AUXILIARY_ACTIVITY_BAR_ACTION_CONTAINER_TOGGLED_BACKGROUND = registerColor(AUXILIARY_ACTIVITY_BAR_ACTION_CONTAINER_TOGGLED_BACKGROUND_ID, {
	dark: '#202020',
	light: '#FFFFFF',
	hcDark: '#202020',
	hcLight: '#FFFFFF'
}, localize(AUXILIARY_ACTIVITY_BAR_ACTION_CONTAINER_TOGGLED_BACKGROUND_ID, "Auxiliary activity bar action container toggled background color. The auxiliary activity bar is shown on the far left or far right of the workspace, opposing the activity bar, and allows the user to switch between auxiliary views."));

// The auxiliary activity bar action icon background color.
const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_ID = 'auxiliaryActivityBar.actionIconBackground';
export const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND = registerColor(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_ID, {
	dark: '#c1c9d1',
	light: '#d9dfe5',
	hcDark: '#c1c9d1',
	hcLight: '#d9dfe5'
}, localize(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_ID, "Auxiliary activity bar action icon background color. The auxiliary activity bar is shown on the far left or far right of the workspace, opposing the activity bar, and allows the user to switch between auxiliary views."));

// The auxiliary activity bar action icon background toggled color.
const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_TOGGLED_ID = 'auxiliaryActivityBar.actionIconBackgroundToggled';
export const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_TOGGLED = registerColor(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_TOGGLED_ID, {
	dark: '#3a78b1',
	light: '#3a78b1',
	hcDark: '#3a78b1',
	hcLight: '#3a78b1'
}, localize(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_TOGGLED_ID, "Auxiliary activity bar action icon background toggled color. The auxiliary activity bar is shown on the far left or far right of the workspace, opposing the activity bar, and allows the user to switch between auxiliary views."));

// The auxiliary activity bar action icon background hover color.
const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_HOVER_ID = 'auxiliaryActivityBar.actionIconBackgroundHover';
export const AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_HOVER = registerColor(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_HOVER_ID, {
	dark: '#ffffff',
	light: '#ffffff',
	hcDark: '#ffffff',
	hcLight: '#ffffff'
}, localize(AUXILIARY_ACTIVITY_BAR_ACTION_ICON_BACKGROUND_HOVER_ID, "Auxiliary activity bar action icon color. The auxiliary activity bar is shown on the far left or far right of the workspace, opposing the activity bar, and allows the user to switch between auxiliary views."));

// < --- Modal Dialog --- >

// Modal dialog background color.
const MODAL_DIALOG_BACKGROUND_ID = 'modalDialog.background';
export const MODAL_DIALOG_BACKGROUND = registerColor(MODAL_DIALOG_BACKGROUND_ID, {
	dark: '#3b4144',
	light: '#f1f3f5',
	hcDark: '#3b4144',
	hcLight: '#f1f3f5'
}, localize(MODAL_DIALOG_BACKGROUND_ID, "Modal dialog background color."));

// Modal dialog foreground color.
const MODAL_DIALOG_FOREGROUND_ID = 'modalDialog.foreground';
export const MODAL_DIALOG_FOREGROUND = registerColor(MODAL_DIALOG_FOREGROUND_ID, {
	dark: '#cfd0d0',
	light: '#000000',
	hcDark: '#cfd0d0',
	hcLight: '#000000'
}, localize(MODAL_DIALOG_FOREGROUND_ID, "Modal dialog foreground color."));

// Modal dialog border color.
const MODAL_DIALOG_BORDER_ID = 'modalDialog.border';
export const MODAL_DIALOG_BORDER = registerColor(MODAL_DIALOG_BORDER_ID, {
	dark: '#3b4144',
	light: '#dee1e5',
	hcDark: '#3b4144',
	hcLight: '#dee1e5'
}, localize(MODAL_DIALOG_BORDER_ID, "Modal dialog border color."));

// Modal dialog separator color.
const MODAL_DIALOG_SEPARATOR_ID = 'modalDialog.separator';
export const MODAL_DIALOG_SEPARATOR = registerColor(MODAL_DIALOG_SEPARATOR_ID, {
	dark: '#292f32',
	light: '#dee1e5',
	hcDark: '#292f32',
	hcLight: '#dee1e5'
}, localize(MODAL_DIALOG_SEPARATOR_ID, "Modal dialog border color."));

// Modal dialog title bar background color.
const MODAL_DIALOG_TITLE_BAR_BACKGROUND_ID = 'modalDialog.titleBarBackground';
export const MODAL_DIALOG_TITLE_BAR_BACKGROUND = registerColor(MODAL_DIALOG_TITLE_BAR_BACKGROUND_ID, {
	dark: '#292f32',
	light: '#dee1e5',
	hcDark: '#292f32',
	hcLight: '#dee1e5'
}, localize(MODAL_DIALOG_TITLE_BAR_BACKGROUND_ID, "Modal dialog title bar background color."));

// Modal dialog title bar foreground color.
const MODAL_DIALOG_TITLE_BAR_FOREGROUND_ID = 'modalDialog.titleBarForeground';
export const MODAL_DIALOG_TITLE_BAR_FOREGROUND = registerColor(MODAL_DIALOG_TITLE_BAR_FOREGROUND_ID, {
	dark: '#cfd0d0',
	light: '#000000',
	hcDark: '#cfd0d0',
	hcLight: '#000000'
}, localize(MODAL_DIALOG_TITLE_BAR_FOREGROUND_ID, "Modal dialog title bar foreground color."));

// Modal dialog button background color.
const MODAL_DIALOG_BUTTON_BACKGROUND_ID = 'modalDialog.buttonBackground';
export const MODAL_DIALOG_BUTTON_BACKGROUND = registerColor(MODAL_DIALOG_BUTTON_BACKGROUND_ID, {
	dark: '#292f32',
	light: '#dee1e5',
	hcDark: '#292f32',
	hcLight: '#dee1e5'
}, localize(MODAL_DIALOG_BUTTON_BACKGROUND_ID, "Modal dialog button background color."));

// Modal dialog button hover background color.
const MODAL_DIALOG_BUTTON_HOVER_BACKGROUND_ID = 'modalDialog.buttonHoverBackground';
export const MODAL_DIALOG_BUTTON_HOVER_BACKGROUND = registerColor(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND_ID, {
	dark: darken(MODAL_DIALOG_BUTTON_BACKGROUND, 0.1),
	light: darken(MODAL_DIALOG_BUTTON_BACKGROUND, 0.1),
	hcDark: darken(MODAL_DIALOG_BUTTON_BACKGROUND, 0.1),
	hcLight: darken(MODAL_DIALOG_BUTTON_BACKGROUND, 0.1)
}, localize(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND_ID, "Modal dialog button hover background color."));

// Modal dialog button active background color.
const MODAL_DIALOG_BUTTON_ACTIVE_BACKGROUND_ID = 'modalDialog.buttonActiveBackground';
export const MODAL_DIALOG_BUTTON_ACTIVE_BACKGROUND = registerColor(MODAL_DIALOG_BUTTON_ACTIVE_BACKGROUND_ID, {
	dark: darken(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND, 0.1),
	light: darken(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND, 0.1),
	hcDark: darken(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND, 0.1),
	hcLight: darken(MODAL_DIALOG_BUTTON_HOVER_BACKGROUND, 0.1)
}, localize(MODAL_DIALOG_BUTTON_ACTIVE_BACKGROUND_ID, "Modal dialog button active background color."));

// Modal dialog button foreground color.
const MODAL_DIALOG_BUTTON_FOREGROUND_ID = 'modalDialog.buttonForeground';
export const MODAL_DIALOG_BUTTON_FOREGROUND = registerColor(MODAL_DIALOG_BUTTON_FOREGROUND_ID, {
	dark: '#cfd0d0',
	light: '#000000',
	hcDark: '#cfd0d0',
	hcLight: '#000000'
}, localize(MODAL_DIALOG_BUTTON_FOREGROUND_ID, "Modal dialog button foreground color."));

// --- End Positron ---
