import PropTypes from "prop-types";


const Pagination = ({ skip, limit, total, currentPage, urls }) => {
    return <div>
        <p>Skip: {skip}</p>
        <p>limit: {limit}</p>
        <p>total: {total}</p>
        <p>currentPage: {currentPage}</p>
        <pre>{JSON.stringify(urls, null, 2)}</pre>
    </div>
};

Pagination.propTypes ={
    skip: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    urls: PropTypes.shape({
        zero: PropTypes.string,
        pages: PropTypes.string.isRequired
    }).isRequired
}

export default Pagination;
