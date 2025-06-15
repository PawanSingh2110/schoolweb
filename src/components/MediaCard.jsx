import React from 'react';
import './component.css';;

const MediaCard = ({ media, onClick }) => {
  return (
    <div className="media-card" onClick={onClick}>
      <img src={media.image} alt={media.title} />
      <h3>{media.title}</h3>
      <p>Published On: {media.date}</p>
      <p>Newspaper: {media.newspaper}</p>
      <button className="view-media-btn" onClick={onClick}>
      <span className="arrow">➔</span>
        View Media
      </button>
    </div>
  );
};

export default MediaCard;