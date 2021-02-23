import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from './Page'

function StarWarsPagination(props) {
  const {pageRangeDisplayed} = props;


  function displayPages() {
    const pages = [];

    for (let i = 1; i < pageRangeDisplayed; i ++) {
      pages.push(<Page onPageClick = {props.handlePageChange} pageNum={i} key={i} />
      )}
    
    return pages;
  }

  const pages = displayPages();

  return (
    <nav aria-label="Page navigation example">
      <br />
      <ul className="pagination justify-content-center">
       {pages}
      </ul>
    </nav>
  );
}

export default StarWarsPagination;
