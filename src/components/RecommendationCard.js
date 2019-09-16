import React from 'react';
import RecommendationCardHeader from './RecommendationCardHeader';
import RecommendationCardRow from './RecommendationCardRow';

const RecommendationCard = ({ heading, recommendations}) => (
  
    <div className="recom-card">
      <RecommendationCardHeader heading={heading} />
      {recommendations.map(({ label, value, unit } , i ) => (
        <RecommendationCardRow  label={label} value={value} unit={unit} key={i} />
        
      ))}
    </div>
  );
 


  export default RecommendationCard;