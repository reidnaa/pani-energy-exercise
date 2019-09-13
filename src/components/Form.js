import React from "react";
import { arrayOf, shape, string } from "prop-types";
import FormFieldLabel from "./FormFieldLabel";
import FormField from "./FormField";

const Form = props => {
  const { formFields, form, handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      {formFields.map(({ label, unit }, i) => (
        <div className="form-single" key={i}>
          <FormFieldLabel label={label} unit={unit} />
          <FormField form={form} />
        </div>
      ))}
      <button className="button">Calculate</button>
    </form>
  );
};

const formFieldShape = shape({
  label: string,
  unit: string
});

Form.propTypes = {
  formFields: arrayOf(formFieldShape)
};

export default Form;
