import React, { useEffect, useState } from "react";
import styles from "./PersonalCourses.module.scss";
import PersonalCourseCard from "./PersonalCourseCard";
import PersonalDots from "./PersonalDots/PersonalDots";
import { useLocation, useNavigate } from "react-router-dom";

interface Course {
  id: number;
  course_id: number;
  author: string;
  title: string;
  description: string;
  fulldescription: string;
  course_for: String[];
  course_suitable: String[];
  for_what_reasons: String[];
  about_course: String[];
  tag: string;
  course_rate: string;
  release_date: string;
  course_logo: string;
}

interface CoursesProps {
  cards: Course[];
  total: number;
  limit: number;
  handlePageChange: (page: number) => void;
  currentPage: number
}

const PersonalCourses: React.FC<CoursesProps> = ({ cards, total, limit, handlePageChange, currentPage }) => {
  const location = useLocation();
  const navigate = useNavigate();


  const lastPathSegment = parseInt(location.pathname.split("/").pop() || "1", 10);


  const totalPages = Math.ceil(total / limit);
  const startIndex = (currentPage - 1) * limit;

  const currentData = cards


  return (
    <section className={styles.courses}>
      <div className={styles.courses__header}>
        <p className={styles.courses__title}>Курсы</p>
        <select className={styles.courses__select}>
          <option>Пройденные</option>
          <option>Недавние</option>
          <option>Незаконченные</option>
        </select>
      </div>
      <div className={styles.courses__cards}>
        {currentData.map((item) => (
          <PersonalCourseCard key={item.id} item={item} />
        ))}
      </div>
      <PersonalDots totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
};

export default PersonalCourses;
