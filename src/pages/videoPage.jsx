import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../CSSModules/videoPage.module.css';
import { useVideoResolution } from '../components/hooks/useGeneral';

const VideoPage = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className={styles.noMovie}>
        <p>No movie selected.</p>
      </div>
    );
  }

  const resolutionOptions = ["1080p", "720p", "480p", "360p"];
  const defaultQuality = "720p";

  const {
    videoSources,
    currentQuality,
    currentSource,
    handleResolutionChange,
  } = useVideoResolution(movie, resolutionOptions, defaultQuality);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentQuality]);

  return (
    <div className={styles.container}>
      <div className={styles.resolutionOptions}>
        {videoSources.map((source) => (
          <button
            key={source.quality}
            className={`${styles.resolutionButton} ${
              source.quality === currentQuality ? styles.active : ""
            }`}
            onClick={() => handleResolutionChange(source.quality)}
          >
            {source.quality}
          </button>
        ))}
      </div>
      <video
        key={currentQuality}
        ref={videoRef}
        src={currentSource ? currentSource.src : ""}
        className={styles.video}
        controls
        preload="auto"
        width="100%"
      />
    </div>
  );
};

export default VideoPage;
