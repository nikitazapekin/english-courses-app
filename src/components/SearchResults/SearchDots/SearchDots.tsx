 


import React from "react";
import styles from "./SearchDots.module.scss";

interface PersonalDotsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SearchDots: React.FC<PersonalDotsProps> = ({ totalPages, currentPage, onPageChange }) => {
  const maxVisibleDots = 3; 

  const getVisiblePages = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleDots / 2));
    let endPage = startPage + maxVisibleDots - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisibleDots + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={styles.dots}>
      <div
        className={`${styles.dots__dot} ${currentPage === 1 ? styles.dots__disabled : ""}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        {"<"}
      </div>
      {visiblePages.map((page) => (
        <div
          key={page}
          className={`${styles.dots__dot} ${page === currentPage ? styles.dots__active : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
      <div
        className={`${styles.dots__dot} ${currentPage === totalPages ? styles.dots__disabled : ""}`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        {">"}
      </div>
    </div>
  );
};

export default SearchDots;

 