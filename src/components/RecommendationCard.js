import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import RecommendationCardHeader from './RecommendationCardHeader';
import RecommendationCardRow from './RecommendationCardRow';

const RecommendationCard = ({ heading, recommendations }) => (
    <div className="recom-card">
      <RecommendationCardHeader heading={heading} />
      {recommendations.map(({ label, value, unit } , i ) => (
        <RecommendationCardRow label={label} value={value} unit={unit} key={i} />
      ))}
    </div>
  );
  
  const recommendationShape = shape({
    label: string,
    value: number,
    unit: string,
  });
  
  RecommendationCard.propTypes = {
    heading: string,
    recommendations: arrayOf(recommendationShape),
  };

  export default RecommendationCard;