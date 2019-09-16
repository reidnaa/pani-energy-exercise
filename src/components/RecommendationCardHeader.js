import React from 'react';

const RecommendationCardHeader = ({ heading }) => {
  return(
    <div className="recom-card-header">
      <label>
        {heading}
      </label>
    </div>

  );
};



export default RecommendationCardHeader;