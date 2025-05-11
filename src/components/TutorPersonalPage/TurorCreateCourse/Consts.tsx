export const dataPreview = [
    {
        id: 1,
        title: "Название курса",
        placeholder: "Введите название курса",
        type: "input",
        name: "name"
    },

    {
        id: 2,
        title: "Описание курса",
        placeholder: "Введите описание курса",
        type: "input",
        name: "description"
    },
     
    {
        id: 3,
        title: "Курс предназначен для",
        placeholder: "Для кого этот курс",
        type: "input",
        name: "course_for",
        autocomplete: "on",
        list: "courseForOptions",
        options: [
            "Школьников",
            "Студентов",
            "Взрослых",
            "Начинающих",
            "Опытных специалистов",
            "IT-специалистов",
            "Менеджеров",
            "Маркетологов",
            "Для самых маленьких",
            "Для новичков",
            "Для студентов",
            "Разговорный",
            "Грамматика",
            "Для программистов",
            "Для бизнеса",
            "Для преподавателей"
        ]
    },

    {
        id: 5,
        title: "Полное описание",
        placeholder: "полное описание курса",
        type: "input",
        name: "fulldescription"


    },


    {
        id: 6,
        title: "Для чего нужно знать английский",
        placeholder: "Для чего нужно знать английский",
        type: "select",
        name: "for_what_reasons"


    },

    {
        id: 7,
        title: "О курсе",
        placeholder: "О курсе",
        type: "select",
        name: "about_course"


    },
    {
        id: 8,
        title: "Тег",
        placeholder: "Тег курса",
        type: "select",
        name: "tag",

        options: ["Начинающий", "Средний", "Продвинутый", "Бизнес", "Разговорный"]

    },


    {
        id: 4,
        title: "Лого курса",
        placeholder: "Добавьте логотип курса",
        type: "image",
        name: "logo"
    },
]

