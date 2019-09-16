import React from "react";
import FormFieldLabel from "./FormFieldLabel";
import FormField from "./FormField";

const Form = props => {
  const { formFields, form, handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="fields">
      {formFields.map(({ label, unit }, i) => (
        <div className="form-single" key={i}>
          <FormFieldLabel label={label} unit={unit} />
          <FormField form={form} />
        </div>
      ))}
      </div>
      <button className="button">Calculate Recommendations</button>
    </form>
  );
};



export default Form;
