

import styles from "./Lesson.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
import Avatar from "../../../assets/avatars/avatar1.png";
import { LessonCommentItem, Response } from "../types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReplyToSelector } from "../../../store/selectors/ReplyTo.selector";
import LessonService from "../../../services/Lesson";

import Txt from "../../../assets/download/txt.png"
import Pptx from "../../../assets/download/ppt.png"
import Word from "../../../assets/download/word.png"
import PersonalService from "../../../services/Personal";
import CommentsService from "../../../services/Comments";
const data: LessonCommentItem[] = [

];

interface User {

  id: number,
  email: string,
  auth_date: string,
  user_id: number,
  courses: string,
  phone: string,
  country: string,
  city: string,
  role: string,
  username: string,
  describtion: string

}

interface LessonTypes {
  id: number;
  title: string;
  description: string;
  durability: string;
  video: string;

  materials: { filename: string; data: string };
}

interface Comments {

  
    
        
            id: number,
            lesson_id: number,
            author_id: number,
            author_name: string,
            text:  string,
            created_at:  string,
            likes:  number,
            parent_comment_id: number | null, 
            author: {
                id:  number,
                username: string,
                email: string,
                avatar: string,
                 role:  string,
                country: string,
                city: string
            }
        
 
}

const getIcon = (filename: string) => {
  const extension = filename.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "txt":
      return Txt;
    case "ppt":
    case "pptx":
      return Pptx;
    case "doc":
    case "docx":
      return Word;
    default:
      return Txt;
  }
};

const LessonComponent = () => {
  const { theme } = useParams();


  const [comments, setComments ] = useState<Comments[]>([])
//  const [comments, setComments] = useState<LessonCommentItem[]>(data);
  const [lesson, setLesson] = useState<LessonTypes>();
  const [userAvatar, setUserAvatar] = useState<string>();
  const [user, setUser] = useState<User>()
  const location = useLocation();
  const lastPathSegment = location.pathname.split("/")
  console.log(lastPathSegment[lastPathSegment.length - 2])
 



  const handleAddComment = async (text: string) => {
    try {
      const response = await CommentsService.CreateComment({
        lesson_id: Number(lastPathSegment[lastPathSegment.length - 2]),
        text: text,
      });
  
      const user = await PersonalService.GetUser();
      const userAvatarResponse = await PersonalService.GetAvatar();
      const userAvatar = userAvatarResponse.data.avatar;  
  
      const newComment = {
        id: 0,
        lesson_id: 0,
        author_id: 0,
        author_name: user.data.user.username,
        text: text,
        created_at: Date.now().toString(),
        likes: 0,
        parent_comment_id: null,
        author: {
          id: 0,
          username: user.data.user.username,
          email: user.data.user.email,
          avatar: userAvatar,  
          role: user.data.user.role,
          country: user.data.user.country,
          city: user.data.user.city,
        },
      };
  
   
  setComments([ newComment, ...comments]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  
  useEffect(() => {

    const handleFetch = async () => {
      try {

        const response = await CommentsService.GetComments(lastPathSegment[lastPathSegment.length - 2])
        console.log("RESP", response.data.comments)
        setComments(response.data.comments)
      } catch {

      }
    }

    handleFetch()

  }, [])
  const { avatar, userId, username, date, comment, likes, isYourComment, to, commentId } = useSelector(ReplyToSelector);




  const handleAddReply = (commentId: number, reply: Response) => {
  /*   setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.commentId === commentId) {
          return {
            ...comment,
            responces: comment.responces ? [...comment.responces, reply] : [reply],
          };
        }
        return comment;
      })
    ); */
  };

  useEffect(() => {
    const reply = {
      userId: userId,
      username: username,
      comment: comment,
      date: date,
      avatar: Avatar,
      likes: likes,
      isYourComment: isYourComment,
      to: to,
    };

    if (userId && username && date && comment && isYourComment && to && commentId >= 0) {
      handleAddReply(commentId, reply);
    }
  }, [avatar, userId, username, date, comment, likes, isYourComment, to, commentId]);



  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await LessonService.GetLesson(
          lastPathSegment[lastPathSegment.length - 1]!,
          lastPathSegment[lastPathSegment.length - 2]!
        );

        const lessonData = response.data.lesson;
        setLesson(lessonData);
      } catch (error) {
        console.error("Error loading lesson:", error);
      }
    };

    handleGet();


    const handleGetUser = async () => {
      try {
        const response = await PersonalService.GetUser()
        console.log(response.data)
        setUser(response.data.user)
      } catch {

      }
    }

    handleGetUser()


    const handleGetAvatar = async () => {
      try {
        const response = await PersonalService.GetAvatar()
        console.log("avatar", response.data.avatar)
        //   setUser(response.data.user)
        setUserAvatar(response.data.avatar)
      } catch {

      }
    }

    handleGetAvatar()
  }, []);

  const handleDownload = (materials: { filename: string, data: string }) => {
    if (!materials || !materials.data) return;

    const byteCharacters = atob(materials.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = materials.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className={styles.lesson}>
      <div className={styles.lesson__inner}>
        <div className={styles.lesson__title}>
          <p className={styles.lesson__number}>Урок {lesson?.id}</p>

          <h1 className={styles.lesson__name}>{lesson?.title}</h1>
        </div>
        <p className={styles.lesson__subtitle}>{lesson?.durability}</p>

        <div className={styles.lesson__content}>


          {lesson && lesson.video && (
            <video
              className={styles.lesson__video}
              controls
              src={`data:video/mp4;base64,${lesson.video}`}
              title="Video lesson"
            >
              Ваш браузер не поддерживает видео.
            </video>
          )}

          <div className={styles.lesson__testing}>Тематический тест по теме</div>

          {lesson?.materials && (
            <div
              className={styles.lesson__files}
            >
              <img
                className={styles.lesson__icon}
                src={getIcon(lesson.materials.filename)} alt="File Icon" />


              <button
                className={styles.lesson__download}
                onClick={() => handleDownload(lesson.materials)}
              >
                Скачать {lesson.materials.filename}
              </button>

            </div>
          )}


          <LessonPanel handleAddComment={handleAddComment}
            user={user!}
            avatar={userAvatar!}
          />

          <LessonCommentsHeader />

          <LessonComments data={comments!} />
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;

