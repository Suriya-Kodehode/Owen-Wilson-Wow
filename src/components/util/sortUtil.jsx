export const sortData = (data, sortField, sortOrder) => {
  if (!Array.isArray(data)) return data;
  return [...data].sort((a, b) => {
    let cmp = 0;
    if (sortField === "year" || sortField === "total_wows_in_movie") {
      const aNumber = a[sortField] !== undefined && a[sortField] !== null ? Number(a[sortField]) : 0;
      const bNumber = b[sortField] !== undefined && b[sortField] !== null ? Number(b[sortField]) : 0;
      cmp = aNumber - bNumber;
    } else {
      const aVal = a[sortField] !== undefined && a[sortField] !== null ? a[sortField] : "";
      const bVal = b[sortField] !== undefined && b[sortField] !== null ? b[sortField] : "";
      cmp = aVal.toString().localeCompare(bVal.toString());
    }
    return sortOrder === "asc" ? cmp : -cmp;
  });
};
