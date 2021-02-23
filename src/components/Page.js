import React from "react";

export default function Page(props) {
  return (
    <li onClick={() => props.onPageClick(props.pageNum)} className="page-item">
      <a className="page-link">
        {props.pageNum}
      </a>
    </li>
  );
}
