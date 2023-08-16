import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import  Results  from './Results';

const Routers = () => {

  return (
    <div className='p-4'>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />}  />
        <Route path={[ '/search', '/images', '/news', '/videos' ]} element={<Results />} />
      </Routes>
    </div>
  )
}

export default Routers;
