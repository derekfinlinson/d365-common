/**
 * Set a field's requirement level
 * @param fieldName Name of field
 * @param requiredLevel Requirement level
 * @param form Form context
 */
export function setFieldRequirementLevel(fieldName: string, requiredLevel: Xrm.Page.RequirementLevel, form: Xrm.FormContext): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
* @param allControls Apply to all controls
* @param form Form context
*/
export function setControlVisibility(controlName: string, allControls: boolean, visible: boolean, form: Xrm.FormContext): boolean {
  const control = form.getControl<Xrm.Page.StandardControl>(controlName.toLowerCase());

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
* @param form Form context
*/
export function setControlLabel(controlName: string, label: string, form: Xrm.FormContext): boolean {
  const control = form.getControl<Xrm.Page.StandardControl>(controlName.toLowerCase());

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
export function setDefaultValue(fieldName: string, value: any, form: Xrm.FormContext, fireOnChange?: boolean): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
export function addFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel,
  uniqueId: string, timeout: number = 10000, form: Xrm.FormContext): boolean  {
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
export function addOnChange(fieldName: string, fireOnChange: boolean, event: Xrm.Page.ContextSensitiveHandler, form: Xrm.FormContext): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
export function removeOnChange(fieldName: string, event: Xrm.Page.ContextSensitiveHandler, form: Xrm.FormContext): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
export function setValue(fieldName: string, value: any, form: Xrm.FormContext, fireOnChange?: boolean): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

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
export function fieldContainsData(fieldName: string, form: Xrm.FormContext): boolean {
  const field = form.getAttribute<Xrm.Page.Attribute>(fieldName.toLowerCase());

  return field != null && field.getValue() != null;
}

/**
* Disable/enable controls for a field
* @param fieldName Name of control
* @param disabled Disable or enable field
* @param form Form context
*/
export function setDisabled(fieldName: string, allControls: boolean, disabled: boolean, form: Xrm.FormContext): boolean {
  const control = form.getControl<Xrm.Page.StandardControl>(fieldName.toLowerCase());

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
* @param form Form context
*/
export function addPreSearch(fieldName: string, handler: Xrm.Events.ContextSensitiveHandler, form: Xrm.FormContext): boolean {
  const field = form.getAttribute<Xrm.Page.LookupAttribute>(fieldName.toLowerCase());

  if (field == null) {
      return false;
  }

  field.controls.forEach((c: Xrm.Page.LookupControl) => {
      c.addPreSearch(handler);
  });
}

/**
 * Navigate to different form
 * @param form Form context
 * @param label Label of form to navigate to
 */
export function navigateToForm(form: Xrm.FormContext, label: string) {
  const current = form.ui.formSelector.getCurrentItem();
  
  if (current.getLabel() !== label) {
    form.ui.formSelector.items.forEach(f => {
      if (f.getLabel() === label) {
        f.navigate();
      }
    });
  }
}

/**
 * Filter lookup field
 * @param form Form context
 * @param lookupAttribute Logical name of attribute to which the filter will apply
 * @param attributeFilter Logical name of the attribute to filter on
 * @param values Values for the filter
 */
export function filterLookup(form: Xrm.FormContext, lookupAttribute: string, attributeFilter: string, values: string[]): boolean {
  if (values.length === 0) {
    return false;
  }

  const value = values.map(v => `<value>${v}</value>`);

  const filter = [
    "<filter>",
    `<condition attribute='${attributeFilter}' operator='in'>`,
    value,
    "</condition>",
    "</filter>"
  ].join("");

  form
    .getAttribute<Xrm.Page.LookupAttribute>(lookupAttribute)
    .controls.forEach(c => c.addCustomFilter(filter));

    return true;
}