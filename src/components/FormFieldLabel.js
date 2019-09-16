import React from 'react';


const FormFieldLabel = ({ label, unit }) => {
  return(
    <div className="form-field-label">
      <label>{label} {unit}</label>
    </div>
  )
};



export default FormFieldLabel;