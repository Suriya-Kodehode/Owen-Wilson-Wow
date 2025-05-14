import React from 'react';
import { useTruncatedText } from '../../components/hooks/useGeneral.jsx';
import { useNavigate } from 'react-router-dom';
import styles from "../../CSSModules/displayApi.module.css";

const MovieCard = ({ item, isSelected, onClick }) => {
  const { ref: quoteRef, isTruncated, isExpanded, toggleExpand } = useTruncatedText(item.full_line);
  const navigate = useNavigate();

  const cardClass = `${styles.movieCard} ${isSelected ? styles.selectedCard : ""}`;
  const quoteClassName = isExpanded
    ? styles.quoteExpanded
    : isTruncated
    ? styles.quote
    : styles.quoteNoPointer;

  const handlePosterClick = (e) => {
    e.stopPropagation();
    navigate('/video', { state: { movie: item } });
  };

  return (
    <div className={cardClass} onClick={onClick}>
      <div className={styles.cardHeader}>
        <h3 className={styles.movieTitle}>{item.movie}</h3>
        <p className={styles.movieYear}>
          <strong>Year:</strong> {item.year}
        </p>
      </div>
      <p className={styles.movieDirector}>
        <strong>Director:</strong> {item.director}
      </p>
      <p className={styles.movieTotalWow}>
        <strong>Total Wow:</strong> {item.total_wows_in_movie}
      </p>
      <div className={styles.quoteContainer}>
        <strong>Quote:</strong>{" "}
        <span ref={quoteRef} className={quoteClassName} onClick={toggleExpand}>
          {item.full_line}
        </span>
      </div>
      {item.poster && (
        <img
          src={item.poster}
          alt={`${item.movie} Poster`}
          className={styles.poster}
          onClick={handlePosterClick}
        />
      )}
    </div>
  );
};

export default MovieCard;
