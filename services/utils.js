export const calculatePaginatedPaths = (totalPosts, limit) => {
  const totalPages = Math.ceil(totalPosts / limit);
  const paths = new Array(totalPages).fill(1).map((_n, i) => ({
    params: {
      currentPage: (i + 1).toString(),
    },
  }));

  return paths;
};