import React from 'react';

import FeedBackList from '../../components/FeedbackList';
import FeedbackTemplate from './FeedbackTemplate';



export default function Feedback(){

  return(
    <FeedbackTemplate
      feedback={()=><FeedBackList name="Feedback"/>}
    
    
    />
  )
}