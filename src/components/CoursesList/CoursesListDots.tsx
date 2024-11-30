import React, { useState } from "react";
import styles from "./CoursesListDots.module.scss";

interface CoursesListDotsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CoursesListDots = ({
  totalPages,
  currentPage,
  onPageChange,
}: CoursesListDotsProps) => {
  const maxVisibleDots = 3; // Количество одновременно отображаемых страниц

  const getVisiblePages = () => {
    const startPage = Math.max(1, currentPage - Math.floor(maxVisibleDots / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleDots - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={styles.dots}>
      <div
        className={styles.dots__dot}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        {"<"}
      </div>
      {visiblePages.map((page) => (
        <div
          key={page}
          className={`${styles.dots__dot} ${
            page === currentPage ? styles.dots__active : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <div className={styles.dots__dot}>...</div>
      )}
      <div
        className={styles.dots__dot}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
      >
        {">"}
      </div>
    </div>
  );
};

export default CoursesListDots;


 
/*
import React from "react";
import styles from "./CoursesListDots.module.scss";

interface CoursesListDotsProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const CoursesListDots = ({ totalPages, currentPage, onPageChange }: CoursesListDotsProps) => {
    return (
        <div className={styles.dots}>
            <div
                className={styles.dots__dot}
                onClick={() => onPageChange(currentPage - 1)}
            >
                {"<"}
            </div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <div
                    key={page}
                    className={`${styles.dots__dot} ${
                        page === currentPage ? styles.dots__active : ""
                    }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </div>
            ))}
            <div
                className={styles.dots__dot}
                onClick={() => onPageChange(currentPage + 1)}
            >
                {">"}
            </div>
        </div>
    );
};

export default CoursesListDots;
 */
/*
import styles from "./CoursesListDots.module.scss"
const CoursesListDots = () => {
    return (
        <div className={styles.dots}>
            <div className={styles.dots__dot}>
                {"<"}
            </div>
            <div className={`${styles.dots__dot} ${styles.dots__active}`}>
               1
            </div>
            <div className={styles.dots__dot}>
              2
            </div>
            <div className={styles.dots__dot}>
              3
            </div>
            <div className={styles.dots__dot}>
              ...
            </div>
            <div className={styles.dots__dot}>
                {">"}
            </div>
        </div>
    );
}

export default CoursesListDots;
*/