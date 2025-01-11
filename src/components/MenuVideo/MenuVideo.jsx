// components/MenuVideo.js
import React, { useEffect, useRef } from 'react';
import './MenuVideo.css';
import menuVideo from '../../assets/croissant1.mp4';

const MenuVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / scrollHeight;

        // Calculate the playback time based on scroll
        const videoDuration = video.duration;
        video.currentTime = scrollFraction * videoDuration;
      }
    };

    const video = videoRef.current;

    // Disable right-click context menu on the video
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    if (video) {
      video.addEventListener('contextmenu', disableContextMenu);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (video) {
        video.removeEventListener('contextmenu', disableContextMenu);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="menu-video-container">
      <video
        className="menu-video"
        ref={videoRef}
        src={menuVideo}
        type="video/mp4"
        muted
        controlsList="nodownload noplaybackrate"
        draggable="false"
        playsInline
        
      />
      <div className="video-overlay">
        <h2>Explore Our Menu</h2>
        <p>Experience the finest coffee and treats as you scroll.</p>
      </div>
    </div>
  );
};

export default MenuVideo;
