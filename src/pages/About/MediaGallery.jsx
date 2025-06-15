import React, { useState, useEffect, useRef } from 'react';
import { mediaData } from '../../components/data';
import MediaCard from '../../components/MediaCard';
import AboutSection from '../../components/AboutSection';
import '../../components/component.css';

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [visibleData, setVisibleData] = useState(30); 
  const selectedMediaRef = useRef(null);

  useEffect(() => {
    if (selectedMedia && selectedMediaRef.current) {
      selectedMediaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMedia]);

  const handleCardClick = (media) => {
    setSelectedMedia(media);
  };

  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 20); 
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
    <AboutSection pageTitle="Media Gallery" breadcrumb="Media Album" />
    <div className="media-gallery">
      
      {selectedMedia && (
        <div ref={selectedMediaRef} className="selected-media">
          <h3>{renderTitleWithUnderline(selectedMedia.title)}</h3>
          <p>{selectedMedia.para}</p>
          <img src={selectedMedia.image} alt={selectedMedia.title} />
        </div>
      )}
      <h2><span className="underline">MED</span>IA GALLERY</h2>
      <div className="media-grid">
        {mediaData.slice(0, visibleData).map((media) => (
          <MediaCard key={media.id} media={media} onClick={() => handleCardClick(media)} />
        ))}
      </div>
      {visibleData < mediaData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More Albums
        </button>
      )}
    </div>
    </div>
  );
};

export default MediaGallery;