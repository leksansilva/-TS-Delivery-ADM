import React from 'react';
import Content from '../../components/Content';
import FeedbackTemplate from './FeedbackTemplate';



export default function Feedback(){

  return(
    <FeedbackTemplate
      content={()=><Content name="Feedback"/>}
    
    
    />
  )
}