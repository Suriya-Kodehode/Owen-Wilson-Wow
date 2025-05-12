
export const sortData = (data, sortField, sortOrder) => {
  if (!Array.isArray(data)) return data;
  return [...data].sort((a, b) => {
    let cmp = 0;
    if (sortField === "year") {
      cmp = a.year - b.year;
    } else {
      cmp = a[sortField].localeCompare(b[sortField]);
    }
    return sortOrder === "asc" ? cmp : -cmp;
  });
};
