import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function StarWarsPagination(props) {
console.log(props)
    return (
        <nav  aria-label="Page navigation example">
          <br />
        <ul className="pagination justify-content-center">
          <li onClick={() => props.handlePageChange(1)} className="page-item"><a className="page-link" href="#">1</a></li>
          <li onClick={() => props.handlePageChange(2)} className="page-item"><a className="page-link" href="#">2</a></li>
          <li onClick={() => props.handlePageChange(3)} className="page-item"><a className="page-link" href="#">3</a></li>
          <li onClick={() => props.handlePageChange(4)} className="page-item"><a className="page-link" href="#">4</a></li>
          <li onClick={() => props.handlePageChange(5)} className="page-item"><a className="page-link" href="#">5</a></li>
          <li onClick={() => props.handlePageChange(6)} className="page-item"><a className="page-link" href="#">6</a></li>
          <li onClick={() => props.handlePageChange(7)} className="page-item"><a className="page-link" href="#">7</a></li>
          <li onClick={() => props.handlePageChange(8)} className="page-item"><a className="page-link" href="#">8</a></li>
          <li onClick={() => props.handlePageChange(9)} className="page-item"><a className="page-link" href="#">9</a></li>
        </ul>
      </nav>
    );
}

export default StarWarsPagination;
