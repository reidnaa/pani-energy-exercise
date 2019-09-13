import React from 'react';
import { string } from 'prop-types';

const Divider = ({ label }) => {
  return(
    <div className="divider">
      <fieldset>
        <legend>{label}</legend>
      </fieldset>
    </div>
    
  );
}
Divider.propTypes = {
  label: string,
};

export default Divider;