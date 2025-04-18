import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetailsPage from '../../pages/CourseDetailsPage';


const CourseDetailsWrapper = () => {
  const params = useParams();
  
  return <CourseDetailsPage params={params} />;
};

export default CourseDetailsWrapper;
