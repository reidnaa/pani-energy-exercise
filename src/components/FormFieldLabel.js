import React from 'react';
import { string } from 'prop-types';


const FormFieldLabel = ({ label, unit }) => {
  return(
    <div className="form-field-label">
      <label>{label} {unit}</label>
    </div>
  )
};

FormFieldLabel.propTypes = {
  label: string,
  unit: string,
};


export default FormFieldLabel;