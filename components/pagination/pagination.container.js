import { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "../../src/Link";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const MyPagination = ({ skip, limit, total, urls }) => {
  const currentPage = skip / limit + 1;

  const pages = Math.ceil(total / limit);

  const getLink = useCallback(
    (page) => {
      const { first, pages, param } = urls;
      if (page === 1 && first !== null && typeof first !== "undefined") {
        return first;
      }
      return pages.replace(param, page.toString());
    },
    [urls]
  );

  return (
    <Pagination
      count={pages}
      page={currentPage}
      siblingCount={1}
      renderItem={(item) => (
        <PaginationItem component={Link} href={getLink(item.page)} {...item}>
          {item.page}
        </PaginationItem>
      )}
    />
  );
};

MyPagination.propTypes = {
  skip: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  urls: PropTypes.shape({
    first: PropTypes.string,
    pages: PropTypes.string.isRequired,
    param: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyPagination;
