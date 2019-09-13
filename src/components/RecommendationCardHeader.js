import React from 'react';
import { string } from 'prop-types';

const RecommendationCardHeader = ({ heading }) => {
  return(
    <div className="recom-card-header">
      <label>
        {heading}
      </label>
    </div>

  );
};

RecommendationCardHeader.propTypes = {
  heading: string.isRequired,
};

export default RecommendationCardHeader;