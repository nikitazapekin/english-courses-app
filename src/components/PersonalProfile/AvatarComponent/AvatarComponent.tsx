import React, { useEffect, useState } from "react";
import styles from "./AvatarComponent.module.scss";
import defaultAvatar from "../../../assets/Personal/Avatar.png";
import PersonalService from "../../../services/Personal";

const AvatarComponent = () => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar);  // Изначально изображение по умолчанию

    // Функция для обновления аватара
    const handleSetAvatar = async (url: string) => {
        try {
            const response = await PersonalService.EditUserAvatar({ avatar: url });
            // Здесь можно обработать ответ, если требуется
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetAvatar = async () => {
        try {
            const response = await PersonalService.GetAvatar();
            console.log("Avatar response:", response);
    
            // Если сервер вернул Base64 данные, добавляем префикс
            const avatarUrl = response.data.avatar;
            setAvatar(avatarUrl);  // Устанавливаем аватар с Base64 строкой
        } catch (error) {
            console.error("Error fetching avatar:", error);
        }
    };
       // Получаем аватар при монтировании компонента
    useEffect(() => {
        handleGetAvatar();
    }, []);

    // Обработчик изменения файла
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setAvatar(fileUrl);  // Обновляем аватар на новый
                    handleSetAvatar(fileUrl);  // Отправляем новый аватар на сервер
                }
            };

            reader.readAsDataURL(file);
        }
    };

    // Открытие файлового инпута
    const handleClickAdd = () => {
        document.getElementById("avatarInput")?.click();
    };

    return (
        <div className={styles.avatar}>
            <img className={styles.avatar__image} src={avatar} alt="Avatar" />
            <input
                id="avatarInput"
                type="file"
                className={styles.avatar__input}
                onChange={handleFileChange}
                accept="image/*"
            />
            <div className={styles.avatar__add} onClick={handleClickAdd}>
                +
            </div>
        </div>
    );
};

export default AvatarComponent;



/* import React, { useEffect, useState } from "react";
import styles from "./AvatarComponent.module.scss";
import defaultAvatar from "../../../assets/Personal/Avatar.png";
import PersonalService from "../../../services/Personal";

const AvatarComponent = () => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar);  // Изначально изображение по умолчанию

    // Функция для обновления аватара
    const handleSetAvatar = async (url: string) => {
        try {
            const response = await PersonalService.EditUserAvatar({ avatar: url });
            // Здесь можно обработать ответ, если требуется
        } catch (error) {
            console.error(error);
        }
    };



    const handleGetAvatar = async () => {
        try {
            const response = await PersonalService.GetAvatar();
            // Преобразуем полученные данные в Blob URL
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(imageBlob);
            setAvatar(imageUrl); // Этот URL будет работать в <img />
        } catch (error) {
            console.error("Error fetching avatar:", error);
        }
    };

    

 
    useEffect(() => {
        handleGetAvatar();
    }, []);

    // Обработчик изменения файла
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setAvatar(fileUrl);  // Обновляем аватар на новый
                    handleSetAvatar(fileUrl);  // Отправляем новый аватар на сервер
                }
            };

            reader.readAsDataURL(file);
        }
    };

    // Открытие файлового инпута
    const handleClickAdd = () => {
        document.getElementById("avatarInput")?.click();
    };

    return (
        <div className={styles.avatar}>
            <img className={styles.avatar__image} src={avatar} alt="Avatar" />
            <input
                id="avatarInput"
                type="file"
                className={styles.avatar__input}
                onChange={handleFileChange}
                accept="image/*"
            />
            <div className={styles.avatar__add} onClick={handleClickAdd}>
                +
            </div>
        </div>
    );
};

export default AvatarComponent;
 */
/* import React, { useEffect, useState } from "react";
import styles from "./AvatarComponent.module.scss";
import defaultAvatar from "../../../assets/Personal/Avatar.png";
import PersonalService from "../../../services/Personal";

const AvatarComponent = () => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar);

    const handleSetAvatar = async (url: string) => {
        try {
            const response = await PersonalService.EditUserAvatar({ avatar: url });
        } catch (error) {
            console.error(error);
        }
    };

 
    const handleGetAvatar = async () => {
        try {
            const response = await PersonalService.GetAvatar();
            // Преобразуем полученные данные в Blob URL
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(imageBlob);
            setAvatar(imageUrl); // Этот URL будет работать в <img />
        } catch (error) {
            console.error(error);
        }
    };

    

    useEffect(() => {
        console.log("AVA", avatar);
    }, [avatar]);

    useEffect(() => {
        handleGetAvatar();
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    setAvatar(reader.result as string);
                    handleSetAvatar(reader.result as string);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleClickAdd = () => {
        document.getElementById("avatarInput")?.click();
    };

    return (
        <div className={styles.avatar}>
            <img className={styles.avatar__image} src={avatar} alt="Avatar" />
            <input
                id="avatarInput"
                type="file"
                className={styles.avatar__input}
                onChange={handleFileChange}
                accept="image/*"
            />
            <div className={styles.avatar__add} onClick={handleClickAdd}>
                +
            </div>
        </div>
    );
};

export default AvatarComponent; */

/* import React, { useEffect, useState } from "react";
import styles from "./AvatarComponent.module.scss";
import defaultAvatar from "../../../assets/Personal/Avatar.png";
import PersonalService from "../../../services/Personal";

const AvatarComponent = () => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar);
    const handleSetAvatar = async (url: string) => {
        try {
            const response = await PersonalService.EditUserAvatar({ avatar: url })
        } catch {
        }
    }
    const handleGetAvatar = async () => {
        try {
        const response = await PersonalService.GetAvatar();
        console.log("RESP", response)
        setAvatar(response.data)
    } catch {
    }
    }

useEffect(()=> {
console.log("AVA", avatar)
}, [avatar])
    useEffect(() => {
        handleGetAvatar()
    }, [])
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    setAvatar(reader.result as string);
                    handleSetAvatar(reader.result as string)
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleClickAdd = () => {
        document.getElementById("avatarInput")?.click();
    };

    return (
        <div className={styles.avatar}>
            <img className={styles.avatar__image} src={avatar} alt="Avatar" />
            <input
                id="avatarInput"
                type="file"
                className={styles.avatar__input}
                onChange={handleFileChange}
                accept="image/*"

            />
            <div className={styles.avatar__add} onClick={handleClickAdd}>
                +
            </div>
        </div>
    );
};

export default AvatarComponent;
 */