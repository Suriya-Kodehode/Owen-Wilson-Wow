export const sortData = (data, sortField, sortOrder) => {
  if (!Array.isArray(data)) return data;
  return [...data].sort((a, b) => {
    let cmp = 0;
    if (sortField === "year") {
      const aYear = a.year !== undefined && a.year !== null ? a.year : 0;
      const bYear = b.year !== undefined && b.year !== null ? b.year : 0;
      cmp = aYear - bYear;
    } else {
      const aVal = a[sortField] !== undefined && a[sortField] !== null ? a[sortField] : "";
      const bVal = b[sortField] !== undefined && b[sortField] !== null ? b[sortField] : "";
      cmp = aVal.toString().localeCompare(bVal.toString());
    }
    return sortOrder === "asc" ? cmp : -cmp;
  });
};
