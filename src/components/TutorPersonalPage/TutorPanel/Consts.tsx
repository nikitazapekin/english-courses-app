import User from "../../../assets/tutorBtns/user.png"
import Student  from "../../../assets/tutorBtns/student.png"
import Rate  from "../../../assets/tutorBtns/star.png"
import Pencil  from "../../../assets/tutorBtns/pencil.png"
import Cubok  from "../../../assets/tutorBtns/trophy.png"
import Book  from "../../../assets/tutorBtns/book.png"
export const panelBtns = [
    {id: 1, text: "Мой профиль", icon: User, link: "/", page: "profile" },
    {id: 2, text: "Список поступивших", icon: Student, link: "/students", page: "students" },
    {id: 3, text: "Мои курсы", icon:  Book, link: "/courses", page: "courses"},
    {id: 4, text: "Мои достижения", icon: Cubok, link: "/achievements", page: "achievements" },
    {id: 5, text: "Редактировать профиль", icon: Pencil, link: "/edit", page: "edit" },
    {id: 6, text: "Отзывы", icon: Rate , link: "/rates", page: "rates"},
  
]