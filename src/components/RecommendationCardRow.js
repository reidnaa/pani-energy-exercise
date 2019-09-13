import React from 'react';
import { string, number } from 'prop-types';

const RecommendationCardRow = ({ label, value, unit }) => {
    
    return(
        <div className="recom-card-row">
            <label>{label}</label>
            <div className="dynamic-input">
                <input type="number" value={value}  /> <span>{unit}</span>
            </div>
        </div>
    )
};

RecommendationCardRow.propTypes = {
  label: string.isRequired,
  value: number.isRequired,
  unit: string.isRequired,
};

export default RecommendationCardRow;