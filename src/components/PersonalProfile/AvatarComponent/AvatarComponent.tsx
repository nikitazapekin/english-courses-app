import React, { useState } from "react";
import styles from "./AvatarComponent.module.scss";
import defaultAvatar from "../../../assets/Personal/Avatar.png";

const AvatarComponent = () => {
    const [avatar, setAvatar] = useState<string>(defaultAvatar);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = () => {
                if (reader.result) {
                    setAvatar(reader.result as string);
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
 