
import { useEffect } from 'react';

export const useClickOutsideSelector = (selector, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(selector)) {
        callback(event);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [selector, callback]);
};
