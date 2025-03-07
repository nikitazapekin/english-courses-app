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
  const endIndex = startIndex + limit;
  //const currentData = cards.slice(startIndex, endIndex);
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


/*  

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
  course_for: string[];
  course_suitable: string[];
  for_what_reasons: string[];
  about_course: string[];
  tag: string;
  course_rate: string;
  release_date: string;
  course_logo: string;
}

interface CoursesProps {
  cards: Course[];
  total: number;
  limit: number;
}

const PersonalCourses: React.FC<CoursesProps> = ({ cards, total, limit }) => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const lastPathSegment = parseInt(location.pathname.split("/").pop() || "1", 10);
  const [currentPage, setCurrentPage] = useState(isNaN(lastPathSegment) ? 1 : lastPathSegment);

  const totalPages = Math.ceil(total / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentData = cards.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentPage !== lastPathSegment) {
      navigate(`/personal/${currentPage}/${limit}`);
    }
  }, [currentPage, navigate]);

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

 
 */


/* import React, { useEffect, useState } from "react";
import styles from "./PersonalCourses.module.scss";
import Card from "../../../assets/personalCourses/Card.png";
import Card1 from "../../../assets/personalCourses/prog1.jpeg";
import Card2 from "../../../assets/personalCourses/prog2.jpeg";
import Card3 from "../../../assets/personalCourses/prog3.png";
import Card4 from "../../../assets/personalCourses/prog4.jpeg";
import PersonalCourseCard from "./PersonalCourseCard";
import PersonalDots from "./PersonalDots/PersonalDots";
import PersonalCourse from "./PersonalCourseCard";
import { useLocation, useNavigate } from "react-router-dom";
 
interface CoursesProps {
 
    cards:  Array<{

        id: number,
        course_id: number,
    author: string,
    title: string,
    description: string,
    fulldescription: string,
    course_for: String[],
    course_suitable:String[],
    for_what_reasons: String[],
    about_course:String[],
    tag: string,
    course_rate: string,
    release_date:string,
    course_logo: string,
}>  

total: number;
limit: number;
 
}



const ITEMS_PER_PAGE = 10;

const PersonalCourses = ({cards, total,limit}: CoursesProps) => {
  const location = useLocation();
  const lastPathSegment = location.pathname.split("/").pop();
  const [currentPage, setCurrentPage] = useState(lastPathSegment!);
//  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
 
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  //const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
const navigate = useNavigate()
  useEffect(()=> {
navigate(`/persinal/${currentPage}/${limit}`)
  }, [currentPage])
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


        {cards.map(item=> (
          <PersonalCourse 
          item={item}
          />
        ))}
     
      </div>
      
      <PersonalDots totalPages={total} currentPage={currentPage} onPageChange={handlePageChange} 
      
      />
      
    </section>
  );
};

export default PersonalCourses;

  */