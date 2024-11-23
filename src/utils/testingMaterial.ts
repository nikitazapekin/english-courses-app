interface testingMaterialsTypes {
    id: number;
    lesson: number;
    title: string;
 
    tasks: {
        sentance: string;
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

/*

interface testingMaterialsTypes {
    id: number;
    lesson: number;
    title: string;
    //   time: ""

    tasks: {
        sentance: string,
        answers: {
            text: string,
            isTrue: boolean
        }[]
    }[];
}


export const testingMaterial: testingMaterialsTypes[] = [
    {

        id: 0,
        lesson: 1,
        title: "Тест 1. Проверка знаний времен Present simple и present continuous",
        //   time: ""

        tasks: {
            sentance: "This information ___ on the Internet.",
            answers: [
                {
                    text: "is easily finds",
                    isTrue: false
                },
                {
                    text: "is easily finds",
                    isTrue: false
                },
                {
                    text: "is easily finds",
                    isTrue: true
                },
                {
                    text: "is easily finds",
                    isTrue: false
                }
            ]
        }
    }
]

*/