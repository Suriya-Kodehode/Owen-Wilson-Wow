import React from 'react';
import { useTruncatedText } from '../../components/hooks/useGeneral.jsx';
import { useNavigate } from 'react-router-dom';
import styles from "../../CSSModules/displayApi.module.css";

const MovieCard = ({ item, index, isSelected, onClick }) => {
  const { ref: quoteRef, isTruncated, isExpanded, toggleExpand } = useTruncatedText(item.full_line);
  const navigate = useNavigate();

  const cardClass = `${styles.apiCard} ${isSelected ? styles.selectedCard : ""}`;
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
    <div key={index} className={cardClass} onClick={onClick}>
      <h3>{item.movie}</h3>
      <p>
        <strong>Year:</strong> {item.year}
      </p>
      <p>
        <strong>Director:</strong> {item.director}
      </p>
      <p>
        <strong>Quote:</strong>{" "}
        <span ref={quoteRef} className={quoteClassName} onClick={toggleExpand}>
          {item.full_line}
        </span>
      </p>
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
