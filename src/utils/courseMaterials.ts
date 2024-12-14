import FileIcon from "../assets/icons/file.png"
interface courseMaterialsTypes {
    id: number;
    lesson: number;
    title: string;
    timestampt: string;
    video: string;
    material: {
        link: string;
        text: string;
        size: string;
        icon: string
    };
    comments: {
        userId: number;
        name: string;
        comment: string;
        rate: number;
        avatar: string;
    }[];
}

 
export const courseMaterials: courseMaterialsTypes[] = [
    {
        id: 0,
        lesson: 1,
        title: "Present simple, present continuous",
        timestampt: "Длительность 25 минут",
        video: "https://www.youtube.com/embed/6Qd1xAikoQc?si=1XXgWrxNi3ZSjm7I",
        material: {
            link: "https://example.com/files/example.zip",
            text: "Present simple, present continuous (шпаргалка) ",
            size: "300кб",
            icon: FileIcon
        },
        comments: [
            {
                userId: 0,
                name: "",
                comment: "",
                rate: 0,
                avatar: ""
            }
        ]
    },
    {
        id: 1,
        lesson: 2,
        title: "Фразовые глаголы",
        timestampt: "Длительность 25 минут",
        video: "https://www.youtube.com/embed/6Qd1xAikoQc?si=1XXgWrxNi3ZSjm7I",
        material: {
            link: "https://example.com/files/example.zip",
            text: "Present simple, present continuous (шпаргалка) ",
            size: "300кб",
            icon: FileIcon
        },
        comments: [
            {
                userId: 0,
                name: "",
                comment: "",
                rate: 0,
                avatar: ""
            }
        ]
    },


    {
        id: 2,
        lesson: 3,
        title: "Предлоги и артикли",
        timestampt: "Длительность 25 минут",
        video: "https://www.youtube.com/embed/6Qd1xAikoQc?si=1XXgWrxNi3ZSjm7I",
        material: {
            link: "https://example.com/files/example.zip",
            text: "Present simple, present continuous (шпаргалка) ",
            size: "300кб",
            icon: FileIcon
        },
        comments: [
            {
                userId: 0,
                name: "",
                comment: "",
                rate: 0,
                avatar: ""
            }
        ]
    },


    {
        id: 3,
        lesson: 4,
        title: "Исключения из правил",
        timestampt: "Длительность 25 минут",
        video: "https://www.youtube.com/embed/6Qd1xAikoQc?si=1XXgWrxNi3ZSjm7I",
        material: {
            link: "https://example.com/files/example.zip",
            text: "Present simple, present continuous (шпаргалка) ",
            size: "300кб",
            icon: FileIcon
        },
        comments: [
            {
                userId: 0,
                name: "",
                comment: "",
                rate: 0,
                avatar: ""
            }
        ]
    }



]