/// <reference types="xrm" />
/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 */
export declare function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel): void;
/**
 * Set a default value on a field
 * @param fieldName Name of field
 * @param value Default value
 */
export declare function setDefaultValue(fieldName: string, value: any): void;
/**
 * Add a form notification that is cleared after a certain time
 * @param message Notification message
 * @param level Form notification level
 * @param uniqueId Unique Id for the message
 * @param timeout Timeout before clearing the notififcation
 */
export declare function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string, timeout?: number): void;
/**
 * Add an on change event to a field
 * @param fieldName Name of field
 * @param fireOnChange Fire event after adding it
 * @param event Event to fire
 */
export declare function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler): void;
