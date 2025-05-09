import React, { useEffect, useState } from "react";
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
            console.log("Avatar response:", response);
            const avatarUrl = response.data.avatar;
            if (avatarUrl) {
                setAvatar(avatarUrl);   
            }
        } catch (error) {
            console.error("Error fetching avatar:", error);
        }
    };  

    useEffect(() => {
        handleGetAvatar();
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setAvatar(fileUrl);   
                    handleSetAvatar(fileUrl);   
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickAdd = () => {
        document.getElementById("avatarInput")?.click();
    };

    const isDefaultAvatar = avatar === defaultAvatar;

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
            {isDefaultAvatar && (
                <div className={styles.avatar__add} onClick={handleClickAdd}>
                    +
                </div>
            )}
        </div>
    );
};

export default AvatarComponent;
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
            console.log("Avatar response:", response);
            const avatarUrl = response.data.avatar;
            setAvatar(avatarUrl);   
        } catch (error) {
            console.error("Error fetching avatar:", error);
        }
    };  
    useEffect(() => {
        handleGetAvatar();
    }, []);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result) {
                    const fileUrl = reader.result as string;
                    setAvatar(fileUrl);   
                    handleSetAvatar(fileUrl);   
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