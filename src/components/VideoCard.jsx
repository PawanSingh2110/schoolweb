import React from 'react';
import './component.css';

const VideoCard = ({ video, onClick }) => {
  return (
    <div className="media-card" onClick={onClick}>
      <div className="video-card-placeholder">
        <video controls width="100%">
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button className="view-media-btn" onClick={onClick}>
        <span className="arrow">➔</span>
        View Album
      </button>
    </div>
  );
};

export default VideoCard;