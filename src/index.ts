/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 */
export function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
 */
export function setControlVisibility(controlName: string, allControls, visible: boolean): boolean {
    const control = Xrm.Page.getControl<Xrm.Page.StandardControl>(controlName.toLowerCase());

    if (control == null) {
        return false;
    }

    if (allControls) {
        control.getAttribute().controls.forEach((c: Xrm.Page.StandardControl) => {
            c.setVisible(visible);
        })
    } else {
        control.setVisible(visible);
    }

    return true;
}

/**
 * Set a control's label
 * @param controlName Name of control
 * @param label Label for control
 */
export function setControlLabel(controlName: string, label: string): boolean {
    const control = Xrm.Page.getControl<Xrm.Page.StandardControl>(controlName.toLowerCase());

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
 * @param fireOnChange Fire field on change event
 */
export function setDefaultValue(fieldName: string, value: any, fireOnChange?: boolean): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
 */
export function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel,
    uniqueId: string, timeout: number = 10000): boolean  {
    Xrm.Page.ui.setFormNotification(message, level, uniqueId);

    setTimeout(() => {
        Xrm.Page.ui.clearFormNotification(uniqueId);
    }, timeout);

    return true;
}

/**
 * Add an on change event to a field
 * @param fieldName Name of field
 * @param fireOnChange Fire event after adding it
 * @param event Event to fire
 */
export function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

    if (field === null || field === undefined) {
        return false;
    }

    // Call actual event from an anonymous method to prevent issues with this
    field.addOnChange((context) => {
        event(context);
    });

    if (fireOnChange) {
        field.fireOnChange();
    }

    return true;
}

/**
 * Set a value on a field
 * @param fieldName Name of field
 * @param value Value
 * @param fireOnChange Fire field on change event
 */
export function setValue(fieldName: string, value: any, fireOnChange?: boolean): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
 */
export function fieldContainsData(fieldName: string): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

    return field != null && field.getValue() != null;
}

/**
 * Disable/enable controls for a field
 * @param fieldName Name of control
 * @param disabled Disable or enable field
 */
export function setDisabled(fieldName: string, allControls: boolean, disabled: boolean): boolean {
    const control = Xrm.Page.getControl<Xrm.Page.StandardControl>(fieldName.toLowerCase());

    if (control == null) {
        return false;
    }

    if (allControls) {
        control.getAttribute().controls.forEach((c: Xrm.Page.StandardControl) => {
            c.setDisabled(disabled);
        });
    } else {
        control.setDisabled(disabled);
    }

    return true;
}

/**
 * Add presearch event to lookup control
 * @param fieldName Name of control
 * @param handler Handler for presearch
 */
export function addPreSearch(fieldName: string, handler: Xrm.Events.ContextSensitiveHandler): boolean {
    const field = Xrm.Page.getAttribute<Xrm.Page.LookupAttribute>(fieldName.toLowerCase());

    if (field == null) {
        return false;
    }

    field.controls.forEach((c: Xrm.Page.LookupControl) => {
        c.addPreSearch(handler);
    });
}
