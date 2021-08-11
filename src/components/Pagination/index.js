import React from "react";

// Style
import "./styles.scss";

function Pagination({ banksPerPage, totalBanks, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBanks / banksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-style">
      {pageNumbers.map((data) => (
        <li className='page-numbers' key={data}>
            <a onClick={()=> paginate(data)} href="#!" className='page-link'>{data}</a>
        </li>
      ))}
    </nav>
  );
}

export default Pagination;
