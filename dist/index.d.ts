/// <reference types="xrm" />
/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 * @param form Form context
 */
export declare function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel, form: Xrm.FormContext): boolean;
/**
* Set a control's visibility
* @param controlName Name of control
* @param visible Visible
* @param form Form context
*/
export declare function setControlVisibility(controlName: string, allControls: any, visible: boolean, form: Xrm.FormContext): boolean;
/**
* Set a control's label
* @param controlName Name of control
* @param label Label for control
* @param form Form context
*/
export declare function setControlLabel(controlName: string, label: string, form: Xrm.FormContext): boolean;
/**
* Set a default value on a field
* @param fieldName Name of field
* @param value Default value
* @param form Form context
* @param fireOnChange Fire field on change event
*/
export declare function setDefaultValue(fieldName: string, value: any, form: Xrm.FormContext, fireOnChange?: boolean): boolean;
/**
* Add a form notification that is cleared after a certain time
* @param message Notification message
* @param level Form notification level
* @param uniqueId Unique Id for the message
* @param timeout Timeout before clearing the notififcation
* @param form Form context
*/
export declare function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string, timeout: number, form: Xrm.FormContext): boolean;
/**
* Add an on change event to a field
* @param fieldName Name of field
* @param fireOnChange Fire event after adding it
* @param event Event to fire
* @param form Form context
*/
export declare function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler, form: Xrm.FormContext): boolean;
/**
* Remove an on change event from a field
* @param fieldName Name of field
* @param event Event to fire
* @param form Form context
*/
export declare function removeOnChange(fieldName: string, event: Xrm.Page.ContextSensitiveHandler, form: Xrm.FormContext): boolean;
/**
* Set a value on a field
* @param fieldName Name of field
* @param value Value
* @param form Form context
* @param fireOnChange Fire field on change event
*/
export declare function setValue(fieldName: string, value: any, form: Xrm.FormContext, fireOnChange?: boolean): boolean;
/**
* Check if a field contains data
* @param fieldName Name of field
* @param form Form context
*/
export declare function fieldContainsData(fieldName: string, form: Xrm.FormContext): boolean;
/**
* Disable/enable controls for a field
* @param fieldName Name of control
* @param disabled Disable or enable field
* @param form Form context
*/
export declare function setDisabled(fieldName: string, allControls: boolean, disabled: boolean, form: Xrm.FormContext): boolean;
/**
* Add presearch event to lookup control
* @param fieldName Name of control
* @param handler Handler for presearch
* @param form Form context
*/
export declare function addPreSearch(fieldName: string, handler: Xrm.Events.ContextSensitiveHandler, form: Xrm.FormContext): boolean;
