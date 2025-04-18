import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailPage from '../../pages/ProjectDetailPage';

const ProjectDetailWrapper = () => {
  const params = useParams();
  
  return <ProjectDetailPage params={params} />;
};

export default ProjectDetailWrapper;