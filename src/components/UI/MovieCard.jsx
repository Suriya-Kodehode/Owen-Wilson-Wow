
import React from 'react';
import styles from "../../CSSModules/displayApi.module.css";

const MovieCard = ({ item, index, isSelected, onClick }) => {
  const cardClass = `${styles.apiCard} ${isSelected ? styles.selectedCard : ""}`;

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
        <strong>Quote:</strong> {item.full_line}
      </p>
      {item.poster && (
        <img
          src={item.poster}
          alt={`${item.movie} Poster`}
          className={styles.poster}
        />
      )}
    </div>
  );
};

export default MovieCard;
