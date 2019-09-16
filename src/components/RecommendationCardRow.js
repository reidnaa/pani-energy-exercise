import React from 'react';

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



export default RecommendationCardRow;