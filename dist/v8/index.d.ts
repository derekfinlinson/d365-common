/// <reference types="xrm" />
/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 */
export declare function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel): boolean;
/**
 * Set a control's visibility
 * @param controlName Name of control
 * @param visible Visible
 */
export declare function setControlVisibility(controlName: string, allControls: any, visible: boolean): boolean;
/**
 * Set a control's label
 * @param controlName Name of control
 * @param label Label for control
 */
export declare function setControlLabel(controlName: string, label: string): boolean;
/**
 * Set a default value on a field
 * @param fieldName Name of field
 * @param value Default value
 * @param fireOnChange Fire field on change event
 */
export declare function setDefaultValue(fieldName: string, value: any, fireOnChange?: boolean): boolean;
/**
 * Add a form notification that is cleared after a certain time
 * @param message Notification message
 * @param level Form notification level
 * @param uniqueId Unique Id for the message
 * @param timeout Timeout before clearing the notififcation
 */
export declare function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string, timeout?: number): boolean;
/**
 * Add an on change event to a field
 * @param fieldName Name of field
 * @param fireOnChange Fire event after adding it
 * @param event Event to fire
 */
export declare function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler): boolean;
/**
 * Remove an on change event from a field
 * @param fieldName Name of field
 * @param event Event to fire
 */
export declare function removeOnChange(fieldName: string, event: Xrm.Page.ContextSensitiveHandler): boolean;
/**
 * Set a value on a field
 * @param fieldName Name of field
 * @param value Value
 * @param fireOnChange Fire field on change event
 */
export declare function setValue(fieldName: string, value: any, fireOnChange?: boolean): boolean;
/**
 * Check if a field contains data
 * @param fieldName Name of field
 */
export declare function fieldContainsData(fieldName: string): boolean;
/**
 * Disable/enable controls for a field
 * @param fieldName Name of control
 * @param disabled Disable or enable field
 */
export declare function setDisabled(fieldName: string, allControls: boolean, disabled: boolean): boolean;
/**
 * Add presearch event to lookup control
 * @param fieldName Name of control
 * @param handler Handler for presearch
 */
export declare function addPreSearch(fieldName: string, handler: Xrm.Events.ContextSensitiveHandler): boolean;
