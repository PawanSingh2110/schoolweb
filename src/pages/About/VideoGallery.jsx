import React, { useState, useEffect, useRef } from 'react';
import { videoData } from '../../components/data'; 
import VideoCard from '../../components/VideoCard';
import AboutSection from '../../components/AboutSection';
import '../../components/component.css';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleData, setVisibleData] = useState(15);
  const selectedVideoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo && selectedVideoRef.current) {
      selectedVideoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedVideo]);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
  };

  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 10);
  };

  const renderTitleWithUnderline = (title) => {
    if (!title) return null;
    const firstThreeLetters = title.slice(0, 3);
    const remainingLetters = title.slice(3);
    return (
      <>
        <span className="underline">{firstThreeLetters}</span>{remainingLetters}
      </>
    );
  };

  return (
    <div>
    <AboutSection pageTitle="Video Gallery" breadcrumb="Video Album" />
    <div className="media-gallery">
      {selectedVideo && (
        <div ref={selectedVideoRef} className="selected-media">
          <h3>{renderTitleWithUnderline(selectedVideo.title)}</h3>
          <p>{selectedVideo.para}</p>
          <video controls width="100%">
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <h2><span className="underline">VID</span>EO GALLERY</h2>
      <div className="media-grid">
        {videoData.slice(0, visibleData).map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => handleCardClick(video)}
          />
        ))}
      </div>
      {visibleData < videoData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More Videos
        </button>
      )}
    </div>
    </div>
  );
};

export default VideoGallery;