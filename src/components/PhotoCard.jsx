import React from 'react'
import './component.css';
const PhotoCard = ({alldata,onClick}) => {
  return (
    <div className="photo-card" onClick={onClick}>
    <img src={alldata.Image} alt={alldata.title} />
    <h3>{alldata.title}</h3>
    <p>Event On: {alldata.date}</p>
    <p>Total Memories: {alldata.memory}</p>
    <button className="view-media-btn" onClick={onClick}>
    <span className="arrow">➔</span>
      View Media
    </button>
  </div>
  )
}

export default PhotoCard