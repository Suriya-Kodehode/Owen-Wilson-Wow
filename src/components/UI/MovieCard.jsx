import React, { useState, useEffect, useRef } from 'react';
import styles from "../../CSSModules/displayApi.module.css";

const MovieCard = ({ item, index, isSelected, onClick }) => {
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const quoteRef = useRef(null);

  const cardClass = `${styles.apiCard} ${isSelected ? styles.selectedCard : ""}`;

  const handleQuoteClick = (e) => {
    e.stopPropagation();
    if (isTruncated) {
      setIsQuoteExpanded(!isQuoteExpanded);
    }
  };

  useEffect(() => {
    const checkTruncation = () => {
      if (quoteRef.current) {
        setIsTruncated(quoteRef.current.scrollWidth > quoteRef.current.clientWidth);
      }
    };

    checkTruncation();

    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [item.full_line, isQuoteExpanded]);

  const quoteClassName = isQuoteExpanded
    ? styles.quoteExpanded
    : isTruncated
    ? styles.quote
    : styles.quoteNoPointer;

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
        <span ref={quoteRef} className={quoteClassName} onClick={handleQuoteClick}>
          {item.full_line}
        </span>
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
