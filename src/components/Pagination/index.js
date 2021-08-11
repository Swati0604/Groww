import React from "react";

// Style
import "./styles.scss";

function Pagination({
  banksPerPage,
  totalBanks,
  paginate,
  maxPageNumberLimit,
  minPageNumberLimit,
  handlePrevBtn,
  handleNextBtn,
}) {
  const pageNumbers = [];
  const pages = totalBanks / banksPerPage;
  for (let i = 1; i <= Math.ceil(pages); i++) {
    pageNumbers.push(i);
  }

  let pageIncrementBtn = null;
  if (pages > maxPageNumberLimit) {
    pageIncrementBtn = <li className='page-numbers dot-box' onClick={handleNextBtn}> ..... </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className='page-numbers dot-box' onClick={handlePrevBtn}> ..... </li>;
  }
  return (
    <nav className="pagination-style">
      <li className="page-numbers">
        <a onClick={() => handlePrevBtn()} href="#!" className="page-link">
          Prev
        </a>
      </li>

      {pageDecrementBtn}

      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li className="page-numbers" key={number}>
              <a
                onClick={() => paginate(number)}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        } else {
          return null;
        }
      })}

      {pageIncrementBtn}
      <li className="page-numbers">
        <a onClick={() => handleNextBtn()} href="#!" className="page-link">
          Next
        </a>
      </li>
    </nav>
  );
}

export default Pagination;
