import Internet from "../assets/Testing/Internet.png"
import Field from "../assets/Testing/Field.jpeg"
import Dog from "../assets/Testing/Dog.jpg"
interface testingMaterialsTypes {
    id: number;
    lesson: number;
    title: string;
 
    tasks: {
        sentance: string;
        image: string;
        answers: {
            text: string;
            isTrue: boolean;
        }[];
    }[];
}

export const testingMaterial: testingMaterialsTypes[] = [
    {
        id: 0,
        lesson: 1,
        title: "Тест 1. Проверка знаний времен Present simple и present continuous",
        tasks: [
            {
                sentance: "This information ___ on the Internet.",
               image: Internet,
       
                answers: [
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: true,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                ],
            },


            {
                sentance: "Jak was __ with his dog yesterday.",
               image: Dog,
       
                answers: [
                    {
                        text: "walk",
                        isTrue: false,
                    },
                    {
                        text: "walked",
                        isTrue: false,
                    },
                    {
                        text: "go",
                        isTrue: true,
                    },
                    {
                        text: "gone",
                        isTrue: false,
                    },
                ],
            },



            {
                sentance: "This information ___ on the Internet.",
               image: Internet,
       
                answers: [
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: true,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                ],
            },


            {
                sentance: "This information ___ on the Internet.",
               image: Internet,
       
                answers: [
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: true,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                ],
            },


            {
                sentance: "This information ___ on the Internet.",
               image: Internet,
       
                answers: [
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: true,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                ],
            },


            {
                sentance: "This information ___ on the Internet.",
               image: Internet,
       
                answers: [
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                    {
                        text: "is easily finds",
                        isTrue: true,
                    },
                    {
                        text: "is easily finds",
                        isTrue: false,
                    },
                ],
            },
        ],
    },
];
 