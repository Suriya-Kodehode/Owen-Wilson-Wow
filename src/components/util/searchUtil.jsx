
export const filterApiData = (data, query) => {
  if (!data || query.trim() === "") return data;
  return data.filter(item => {
    if (typeof item === "string") {
      return item.toLowerCase().includes(query.toLowerCase());
    }
    return (
      item.movie.toLowerCase().includes(query.toLowerCase()) ||
      (item.director && item.director.toLowerCase().includes(query.toLowerCase())) ||
      (item.full_line && item.full_line.toLowerCase().includes(query.toLowerCase()))
    );
  });
};
