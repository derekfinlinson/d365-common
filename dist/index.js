/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 * @param form Form context
 */
export function setFieldRequirementLevel(fieldName, requiredLevel, form) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field == null) {
        return false;
    }
    field.setRequiredLevel(requiredLevel);
    return true;
}
/**
* Set a control's visibility
* @param controlName Name of control
* @param visible Visible
* @param form Form context
*/
export function setControlVisibility(controlName, allControls, visible, form) {
    const control = form.getControl(controlName.toLowerCase());
    if (control == null) {
        return false;
    }
    if (allControls) {
        control.getAttribute().controls.forEach((c) => {
            c.setVisible(visible);
        });
    }
    else {
        control.setVisible(visible);
    }
    return true;
}
/**
* Set a control's label
* @param controlName Name of control
* @param label Label for control
* @param form Form context
*/
export function setControlLabel(controlName, label, form) {
    const control = form.getControl(controlName.toLowerCase());
    if (control == null) {
        return false;
    }
    control.setLabel(label);
    return true;
}
/**
* Set a default value on a field
* @param fieldName Name of field
* @param value Default value
* @param form Form context
* @param fireOnChange Fire field on change event
*/
export function setDefaultValue(fieldName, value, form, fireOnChange) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field == null || field.getValue() != null) {
        return false;
    }
    field.setValue(value);
    if (fireOnChange == true) {
        field.fireOnChange();
    }
    return true;
}
/**
* Add a form notification that is cleared after a certain time
* @param message Notification message
* @param level Form notification level
* @param uniqueId Unique Id for the message
* @param timeout Timeout before clearing the notififcation
* @param form Form context
*/
export function addFormNotification(message, level, uniqueId, timeout = 10000, form) {
    form.ui.setFormNotification(message, level, uniqueId);
    setTimeout(() => {
        form.ui.clearFormNotification(uniqueId);
    }, timeout);
    return true;
}
/**
* Add an on change event to a field
* @param fieldName Name of field
* @param fireOnChange Fire event after adding it
* @param event Event to fire
* @param form Form context
*/
export function addOnChange(fieldName, fireOnChange, event, form) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field === null || field === undefined) {
        return false;
    }
    field.addOnChange(event);
    if (fireOnChange) {
        field.fireOnChange();
    }
    return true;
}
/**
* Remove an on change event from a field
* @param fieldName Name of field
* @param event Event to fire
* @param form Form context
*/
export function removeOnChange(fieldName, event, form) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field === null || field === undefined) {
        return false;
    }
    field.removeOnChange(event);
    return true;
}
/**
* Set a value on a field
* @param fieldName Name of field
* @param value Value
* @param form Form context
* @param fireOnChange Fire field on change event
*/
export function setValue(fieldName, value, form, fireOnChange) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field == null) {
        return false;
    }
    field.setValue(value);
    if (fireOnChange == true) {
        field.fireOnChange();
    }
    return true;
}
/**
* Check if a field contains data
* @param fieldName Name of field
* @param form Form context
*/
export function fieldContainsData(fieldName, form) {
    const field = form.getAttribute(fieldName.toLowerCase());
    return field != null && field.getValue() != null;
}
/**
* Disable/enable controls for a field
* @param fieldName Name of control
* @param disabled Disable or enable field
* @param form Form context
*/
export function setDisabled(fieldName, allControls, disabled, form) {
    const control = form.getControl(fieldName.toLowerCase());
    if (control == null) {
        return false;
    }
    if (allControls) {
        control.getAttribute().controls.forEach((c) => {
            c.setDisabled(disabled);
        });
    }
    else {
        control.setDisabled(disabled);
    }
    return true;
}
/**
* Add presearch event to lookup control
* @param fieldName Name of control
* @param handler Handler for presearch
* @param form Form context
*/
export function addPreSearch(fieldName, handler, form) {
    const field = form.getAttribute(fieldName.toLowerCase());
    if (field == null) {
        return false;
    }
    field.controls.forEach((c) => {
        c.addPreSearch(handler);
    });
}
