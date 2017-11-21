/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 */
export function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel): void {
    const field: Xrm.Page.Attribute =
        Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName);

    if (field == null) {
        return;
    }

    field.setRequiredLevel(requiredLevel);
}

/**
 * Set a default value on a field
 * @param fieldName Name of field
 * @param value Default value
 */
export function setDefaultValue(fieldName: string, value: any): void {
    const field: Xrm.Page.Attribute = Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName);

    if (field == null || field.getValue() != null) {
        return;
    }

    field.setValue(value);
}

/**
 * Add a form notification that is cleared after a certain time
 * @param message Notification message
 * @param level Form notification level
 * @param uniqueId Unique Id for the message
 * @param timeout Timeout before clearing the notififcation
 */
export function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string, timeout: number = 10000): void  {
    Xrm.Page.ui.setFormNotification(message, level, uniqueId);

    setTimeout(() => {
        Xrm.Page.ui.clearFormNotification(uniqueId);
    }, timeout);
}

/**
 * Add an on change event to a field
 * @param fieldName Name of field
 * @param fireOnChange Fire event after adding it
 * @param event Event to fire
 */
export function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler): void {
    const field: Xrm.Page.Attribute =
        Xrm.Page.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
