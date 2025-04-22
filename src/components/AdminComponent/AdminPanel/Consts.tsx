import User from "../../../assets/tutorBtns/user.png"
import Student  from "../../../assets/tutorBtns/student.png"
import Rate  from "../../../assets/tutorBtns/star.png"
import Pencil  from "../../../assets/tutorBtns/pencil.png"
import Cubok  from "../../../assets/tutorBtns/trophy.png"
import Book  from "../../../assets/tutorBtns/book.png"
import Delete from "../../../assets/admin/bin.png"
import Edit from "../../../assets/admin/edit.png"
import Ban from "../../../assets/admin/ban-circle-symbol.png"
export const panelBtns = [
    {id: 1, text: "Мой профиль", icon: User, link: "/", page: "profile" },
    {id: 2, text: "Редактированные курсы", icon: Edit, link: "/editCourses", page: "editCourses" },
    {id: 3, text: "Удаленные курсы", icon:  Delete, link: "/deleteCourses", page: "deleteCourses"},
    {id: 4, text: "Заблокированные пользователи", icon: Ban, link: "/deleteUsers", page: "deleteUsers" },
    {id: 6, text: "Редактируемые пользователи", icon: Edit, link: "/editUsers", page: "editUsers" },
    {id: 5, text: "Редактировать профиль", icon: Pencil, link: "/edit", page: "edit" },
   
  
]