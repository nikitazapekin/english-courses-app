import { useDispatch } from "react-redux";
import styles from "./ResponsePanel.module.scss";
import { setReply } from "../../../store/slices/ReplyTo.slice";
import { useState } from "react";
import CommentsService from "../../../services/Comments";
import { useLocation } from "react-router-dom";

interface Comment {
  id: number;
  lesson_id: number;
  author_id: number;
  author_name: string;
  text: string;
  created_at: string;
  likes: number;
  parent_comment_id: number | null;
  liked_by: Number[];
  author: {
    id: number;
    username: string;
    email: string;
    avatar: string;
    role: string;
    country: string;
    city: string;
  };
  repliesCount: number;
  replies: {
    id: number;
    comment_id: number;
    lesson_id: number;
    author_id: number;
    author_name: string;
    text: string;
    created_at: string;
    likes: number;
    parent_id: number;
    liked_by: Number[];
    author: {
      id: number;
      username: string;
      email: string;
      avatar: string;
      role: string;
      country: string;
      city: string;
    };
  }[];
}

interface User {
  id: number;
  email: string;
  auth_date: string;
  user_id: number;
  courses: string;
  phone: string;
  country: string;
  city: string;
  role: string;
  username: string;
  describtion: string;
}

interface ResponsePanelProps {
  id: number;
  to: string;
  handleClose: () => void;
  user: User;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  userAvatar: string
}

const ResponsePanel = ({ id, to, handleClose, setComments, user, userAvatar }: ResponsePanelProps) => {
  const location = useLocation();
  const lastPathSegment = location.pathname.split("/");
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSend = async () => {
    if (!text.trim()) return; 

    try {
    
      const response = await CommentsService.ReplyToComment({
        lesson_id: Number(lastPathSegment[lastPathSegment.length - 2]),
        replyToComment: String(id),
        text: text,
      });
   
      const newReply = {
        id: Date.now(),  
        comment_id: id,
        lesson_id: Number(lastPathSegment[lastPathSegment.length - 2]),
        author_id: user.id,
        author_name: user.username,
        text: text,
        created_at: new Date().toISOString(),
        likes: 0,
        parent_id: id,
        liked_by: [],
        author: {
          id: user.id,
          username: user.username,
          email: user.email,
          avatar: userAvatar || "",  
          role: user.role,
          country: user.country,
          city: user.city,
        },
      };

     
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              replies: [newReply, ...comment.replies], 
              repliesCount: Number(comment.repliesCount) + 1,  
            };
          }
          return comment;
        })
      );

   
      setText("");
      handleClose();
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className={styles.reply}>
      <input
        type="text"
        className={styles.reply__input}
        placeholder="Напишите ваш ответ"
        value={text}
        onChange={handleChange}
      />
      <div className={styles.reply__btns}>
        <div className={styles.reply__btn} onClick={handleClose}>
          Отмена
        </div>
        <div className={`${styles.reply__btn} ${styles.reply__btn__send}`} onClick={handleSend}>
          Отправить
        </div>
      </div>
    </div>
  );
};

export default ResponsePanel; 