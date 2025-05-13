import { useEffect, useState, useRef } from 'react';

/* 
  useClickOutsideSelector:
  Adds an event listener to detect clicks outside elements matching the given selector.
  Invokes the callback if a click is detected outside, and cleans up afterward.
*/
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

/* 
  useDefaultSortOrder:
  When sorting by "year", the default order is set to "desc" (Descending).
  When sorting by "movie" (Movie Name) or "director", the default order is set to "asc" (Ascending).
  Runs whenever sortField, sortOrder, or setSortOrder changes.
*/
export const useDefaultSortOrder = (sortField, sortOrder, setSortOrder) => {
  useEffect(() => {
    if (sortField === "year" && sortOrder !== "desc") {
      setSortOrder("desc");
    } else if ((sortField === "movie" || sortField === "director") && sortOrder !== "asc") {
      setSortOrder("asc");
    }
  }, [sortField, sortOrder, setSortOrder]);
};

/* 
  useTruncatedText:
  Determines if an element's text content overflows its container (i.e. is truncated).
  Provides a toggleExpand function to switch between expanded and truncated view.
  When the quote is clicked when already expanded, it toggles back to the truncated state.
*/
export const useTruncatedText = (text) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const toggleExpand = (e) => {
    e.stopPropagation();
    if (isTruncated) {
      setIsExpanded(prev => !prev);
    }
  };

  useEffect(() => {
    const checkTruncation = () => {
      if (ref.current) {
        setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [text]);

  return { ref, isTruncated, isExpanded, toggleExpand };
};

/* 
  useVideoResolution:
  Filters available video sources from movie data based on provided resolution options,
  manages the current resolution state, and returns the sources, current quality,
  the corresponding source, and a handler to change resolution.
*/
export const useVideoResolution = (movie, resolutionOptions, defaultQuality) => {
  const videoSources = resolutionOptions
    .filter((res) => movie.video && movie.video[res])
    .map((res) => ({
      src: movie.video[res],
      quality: res,
    }));

  const [currentQuality, setCurrentQuality] = useState(defaultQuality);
  const currentSource = videoSources.find(
    (source) => source.quality === currentQuality
  );

  const handleResolutionChange = (quality) => {
    if (quality !== currentQuality) {
      setCurrentQuality(quality);
    }
  };

  return { videoSources, currentQuality, currentSource, handleResolutionChange };
};
