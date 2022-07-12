import React from 'react';
import './Cover.css';
import coverVideo from '../../media/playa-1.mp4'

export const Cover = () => {
  return (<div className='cover-container'>
    <video className='video' src={coverVideo} autoPlay loop muted />
    <h1>Drive Anywhere</h1>
    <p>Do what you want</p>
    </div>
  );
};

export default Cover;