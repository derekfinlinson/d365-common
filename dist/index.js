"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 */
function setFieldRequirementLevel(fieldName, requiredLevel) {
    const field = Xrm.Page.getAttribute(fieldName);
    if (field == null) {
        return;
    }
    field.setRequiredLevel(requiredLevel);
}
exports.setFieldRequirementLevel = setFieldRequirementLevel;
/**
 * Set a default value on a field
 * @param fieldName Name of field
 * @param value Default value
 */
function setDefaultValue(fieldName, value) {
    const field = Xrm.Page.getAttribute(fieldName);
    if (field == null || field.getValue() != null) {
        return;
    }
    field.setValue(value);
}
exports.setDefaultValue = setDefaultValue;
/**
 * Add a form notification that is cleared after a certain time
 * @param message Notification message
 * @param level Form notification level
 * @param uniqueId Unique Id for the message
 * @param timeout Timeout before clearing the notififcation
 */
function addFormNotification(message, level, uniqueId, timeout = 10000) {
    Xrm.Page.ui.setFormNotification(message, level, uniqueId);
    setTimeout(() => {
        Xrm.Page.ui.clearFormNotification(uniqueId);
    }, timeout);
}
exports.addFormNotification = addFormNotification;
/**
 * Add an on change event to a field
 * @param fieldName Name of field
 * @param fireOnChange Fire event after adding it
 * @param event Event to fire
 */
function addOnChange(fieldName, fireOnChange, event) {
    const field = Xrm.Page.getAttribute(fieldName.toLowerCase());
    if (field === null || field === undefined) {
        return;
    }
    // Call actual event from an anonymous method to prevent issues with this
    field.addOnChange((context) => {
        event(context);
    });
    if (fireOnChange) {
        field.fireOnChange();
    }
}
exports.addOnChange = addOnChange;
