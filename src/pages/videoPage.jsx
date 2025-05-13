import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../CSSModules/videoPage.module.css';

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

  const [selectedResolution, setSelectedResolution] = useState("720p");
  const resolutionOptions = ["1080p", "720p", "480p", "360p"];

  const videoUrl = movie.video ? movie.video[selectedResolution] : null;

  return (
    <div className={styles.container}>
      <div className={styles.resolutionSelector}>
        <label htmlFor="resolutionSelect" className={styles.label}>
          Select Resolution:
        </label>
        <select
          id="resolutionSelect"
          className={styles.select}
          value={selectedResolution}
          onChange={(e) => setSelectedResolution(e.target.value)}
        >
          {resolutionOptions.map((res) => (
            <option key={res} value={res}>
              {res}
            </option>
          ))}
        </select>
      </div>

      {videoUrl ? (
        <video controls className={styles.video}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p className={styles.errorText}>
          Video unavailable at the selected resolution.
        </p>
      )}
    </div>
  );
};

export default VideoPage;
