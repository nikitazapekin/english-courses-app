 

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

 
const data: LessonCommentItem[] = [
 
];

interface LessonTypes {
  id: number;
  title: string;
  description: string;
  durability: string;
  video: string;  
  materials: string[];
}

const LessonComponent = () => {
  const { theme } = useParams();
  const [comments, setComments] = useState<LessonCommentItem[]>(data);
  const [lesson, setLesson] = useState<LessonTypes>();

  const handleAddComment = (text: string) => {
    const newComment: LessonCommentItem = {
      userId: Date.now(),
      username: "Вы",
      comment: text,
      date: new Date().toLocaleDateString(),
      avatar: Avatar,
      likes: 0,
      isYourComment: true,
      responces: null,
      commentId: data.length,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const { avatar, userId, username, date, comment, likes, isYourComment, to, commentId } = useSelector(ReplyToSelector);

  const handleAddReply = (commentId: number, reply: Response) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.commentId === commentId) {
          return {
            ...comment,
            responces: comment.responces ? [...comment.responces, reply] : [reply],
          };
        }
        return comment;
      })
    );
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

  const location = useLocation();
  const lastPathSegment = location.pathname.split("/");

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await LessonService.GetLesson(
          lastPathSegment[lastPathSegment.length - 1]!,
          lastPathSegment[lastPathSegment.length - 2]!
        );
        console.log("LESSON", response.data);
        const lessonData = response.data.lesson;
        setLesson(lessonData);
      } catch (error) {
        console.error("Error loading lesson:", error);
      }
    };

    handleGet();
  }, []);

  return (
    <div className={styles.lesson}>
      <div className={styles.lesson__inner}>
        <div className={styles.lesson__title}>
          <p className={styles.lesson__number}>Урок {lesson?.id}</p>
          {/*

*/}
<h1 className={styles.lesson__name}>{lesson?.title}</h1>
        </div>
        <p className={styles.lesson__subtitle}>{lesson?.durability}</p>

        <div className={styles.lesson__content}>
          {/*
          <LessonHeader />
          */}
         

            
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
          {/*
          <DownloadFile
          title={courseMaterials[Number(theme)].material.text}
            icon={courseMaterials[Number(theme)].material.icon}
            size={courseMaterials[Number(theme)].material.size}
            file={courseMaterials[Number(theme)].material.link}
          />
          */}
          <div className={styles.lesson__testing}>Тематический тест по теме</div>

          <LessonPanel handleAddComment={handleAddComment} />

          <LessonCommentsHeader />

          <LessonComments data={comments} />
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;  

 

/* import styles from "./Lesson.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
import Avatar from "../../../assets/avatars/avatar1.png";
import Avatar2 from "../../../assets/avatars/avatar2.png";
import { LessonCommentItem, Response } from "../types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReplyToSelector } from "../../../store/selectors/ReplyTo.selector";
import LessonService from "../../../services/Lesson";

// Тип для комментариев
const data: LessonCommentItem[] = [
  {
    userId: 1,
    username: "Test",
    comment: "Lorem ipsum dolor sit amet...",
    date: "22.12.2024",
    avatar: Avatar,
    likes: 0,
    isYourComment: false,
    commentId: 0,
    responces: [
      {
        userId: 2,
        username: "Alex",
        comment: "Lorem ipsum dolor sit amet...",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isYourComment: false,
        to: "Test",
      },
    ],
  },
  {
    userId: 4,
    username: "You",
    comment: "Lorem ipsum dolor sit amet...",
    date: "22.12.2024",
    avatar: Avatar,
    likes: 0,
    isYourComment: true,
    commentId: 1,
    responces: [],
  },
];

interface LessonTypes {
  id: number;
  title: string;
  description: string;
  durability: string;
  video: string[]; // Используем string[] для видео
  materials: string[];
}

// Функция для преобразования Buffer в строку Base64
const bufferToBase64 = (buffer: Buffer) => {
  return `data:video/mp4;base64,${buffer.toString("base64")}`;
};

const LessonComponent = () => {
  const { theme } = useParams();
  const [comments, setComments] = useState<LessonCommentItem[]>(data);
  const [lesson, setLesson] = useState<LessonTypes>();

  const handleAddComment = (text: string) => {
    const newComment: LessonCommentItem = {
      userId: Date.now(),
      username: "Вы",
      comment: text,
      date: new Date().toLocaleDateString(),
      avatar: Avatar,
      likes: 0,
      isYourComment: true,
      responces: null,
      commentId: data.length,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const { avatar, userId, username, date, comment, likes, isYourComment, to, commentId } = useSelector(ReplyToSelector);

  const handleAddReply = (commentId: number, reply: Response) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.commentId === commentId) {
          return {
            ...comment,
            responces: comment.responces ? [...comment.responces, reply] : [reply],
          };
        }
        return comment;
      })
    );
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

  const location = useLocation();
  const lastPathSegment = location.pathname.split("/");
 
  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await LessonService.GetLesson(
          lastPathSegment[lastPathSegment.length - 1]!,
          lastPathSegment[lastPathSegment.length - 2]!
        );
        console.log("LESSON", response.data);
        const lessonData = response.data.lesson;
  
        // Проверка, что video[0] является Buffer и преобразование в base64
        if (Array.isArray(lessonData.video) && Buffer.isBuffer(lessonData.video[0])) {
          const base64Video = bufferToBase64(lessonData.video[0]); // Преобразуем Buffer в base64
          console.log("Base64 Video URL:", base64Video); // Проверяем, правильный ли URL
          lessonData.video[0] = base64Video;
        }
  
        setLesson(lessonData);
      } catch (error) {
        console.error("Error loading lesson:", error); // Логирование ошибки
      }
    };
  
    handleGet();
  }, []);
  
  return (
    <div className={styles.lesson}>
      <div className={styles.lesson__inner}>
        <div className={styles.lesson__title}>
          <p className={styles.lesson__number}>Урок {courseMaterials[Number(theme)].lesson}</p>
          <h1 className={styles.lesson__name}>{lesson?.title}</h1>
        </div>
        <p className={styles.lesson__subtitle}>{lesson?.durability}</p>

        <div className={styles.lesson__content}>
          <LessonHeader />
{lesson && lesson.video[0]}
          {lesson && lesson.video.length > 0 && (
            <iframe
              className={styles.lesson__video}
              src={lesson.video[0]} // Здесь видео URL должен быть строкой
              title="Video lesson"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

          <DownloadFile
            title={courseMaterials[Number(theme)].material.text}
            icon={courseMaterials[Number(theme)].material.icon}
            size={courseMaterials[Number(theme)].material.size}
            file={courseMaterials[Number(theme)].material.link}
          />
          <div className={styles.lesson__testing}>Тематический тест по теме</div>

          <LessonPanel handleAddComment={handleAddComment} />

          <LessonCommentsHeader />

          <LessonComments data={comments} />
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
 */

/* import styles from "./Lesson.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { courseMaterials } from "../../../utils/courseMaterials";
import LessonHeader from "../LessonHeader/LessonHeader";
import DownloadFile from "../DownloadFile/DownloadFile";
import LessonPanel from "../LessonPanel/LessonPanel";
import LessonCommentsHeader from "../LessonCommentsHeader/LessonCommentsHeader";
import LessonComments from "../LessonComments/LessonComments";
import Avatar from "../../../assets/avatars/avatar1.png";
import Avatar2 from "../../../assets/avatars/avatar2.png";
import { LessonCommentItem, Response } from "../types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReplyToSelector } from "../../../store/selectors/ReplyTo.selector";
import LessonService from "../../../services/Lesson";

const data: LessonCommentItem[] = [
  {
    userId: 1,
    username: "Test",
    comment: "Lorem ipsum dolor sit amet...",
    date: "22.12.2024",
    avatar: Avatar,
    likes: 0,
    isYourComment: false,
    commentId: 0,
    responces: [
      {
        userId: 2,
        username: "Alex",
        comment: "Lorem ipsum dolor sit amet...",
        date: "22.12.2024",
        avatar: Avatar,
        likes: 0,
        isYourComment: false,
        to: "Test",
      },
    ],
  },
  {
    userId: 4,
    username: "You",
    comment: "Lorem ipsum dolor sit amet...",
    date: "22.12.2024",
    avatar: Avatar,
    likes: 0,
    isYourComment: true,
    commentId: 1,
    responces: [],
  },
];

interface LessonTypes {
  id: number;
  title: string;
  description: string;
  durability: string;
  video: String[]; // Assuming it's an array of video URLs
  materials: String[];
}

const LessonComponent = () => {
  const { theme } = useParams();
  const [comments, setComments] = useState<LessonCommentItem[]>(data);
  const [lesson, setLesson] = useState<LessonTypes>();

  const handleAddComment = (text: string) => {
    const newComment: LessonCommentItem = {
      userId: Date.now(),
      username: "Вы",
      comment: text,
      date: new Date().toLocaleDateString(),
      avatar: Avatar,
      likes: 0,
      isYourComment: true,
      responces: null,
      commentId: data.length,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const { avatar, userId, username, date, comment, likes, isYourComment, to, commentId } = useSelector(ReplyToSelector);

  const handleAddReply = (commentId: number, reply: Response) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.commentId === commentId) {
          return {
            ...comment,
            responces: comment.responces ? [...comment.responces, reply] : [reply],
          };
        }
        return comment;
      })
    );
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

  const location = useLocation();
  const lastPathSegment = location.pathname.split("/");
  console.log("course", lastPathSegment[lastPathSegment.length - 1], "les", lastPathSegment[lastPathSegment.length - 2]);

   useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await LessonService.GetLesson(
          lastPathSegment[lastPathSegment.length - 1]!,
          lastPathSegment[lastPathSegment.length - 2]!
        );
        console.log("LESSON", response.data);
        setLesson(response.data.lesson);
        console.log("Video URLs:", response.data.lesson.video);
      } catch {
        // Handle error (optional)
      }
    };

    handleGet();
  }, []);
 
// Convert Buffer to base64 string
const bufferToBase64 = (buffer: string) => {
    return `data:video/mp4;base64,${buffer.toString('base64')}`;
  };
  

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await LessonService.GetLesson(
          lastPathSegment[lastPathSegment.length - 1]!,
          lastPathSegment[lastPathSegment.length - 2]!
        );
        console.log("LESSON", response.data);
        const lessonData = response.data.lesson;
  
        // If video is in Buffer format, convert it to base64 string
        if (lessonData.video && lessonData.video[0] && lessonData.video[0].type === 'Buffer') {
          const base64Video = bufferToBase64(lessonData.video[0].data);
          lessonData.video[0] = base64Video; // Replace Buffer with base64 string
        }
  
        setLesson(lessonData);
      } catch {
        // Handle error (optional)
      }
    };
  
    handleGet();
  }, []);
  
  return (
    <div className={styles.lesson}>
      <div className={styles.lesson__inner}>
        <div className={styles.lesson__title}>
          <p className={styles.lesson__number}>Урок {courseMaterials[Number(theme)].lesson}</p>
          <h1 className={styles.lesson__name}>{lesson?.title}</h1>
        </div>
        <p className={styles.lesson__subtitle}>{lesson?.durability}</p>

        <div className={styles.lesson__content}>
          <LessonHeader />

{lesson && String(lesson.video[0])}
       
          {lesson?.video && lesson.video.length > 0 && (
            <iframe
              className={styles.lesson__video}
              src={String(lesson.video[0])} 
              title="Video lesson"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

          <DownloadFile
            title={courseMaterials[Number(theme)].material.text}
            icon={courseMaterials[Number(theme)].material.icon}
            size={courseMaterials[Number(theme)].material.size}
            file={courseMaterials[Number(theme)].material.link}
          />
          <div className={styles.lesson__testing}>Тематический тест по теме</div>

          <LessonPanel handleAddComment={handleAddComment} />

          <LessonCommentsHeader />

          <LessonComments data={comments} />
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
  */