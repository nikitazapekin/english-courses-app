import styles from "./HelpForm.module.scss"
import { list } from "./consts";
import Cross from "../../assets/cross.png"
import Bird from "../../assets/SmallBird.png"
import QuestionService from "../../services/Questions";
import { useState } from "react";

const HelpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        type: 'Технические неполадки',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await QuestionService.SendQuestion(
                formData.name,
                formData.email,
                formData.telephone,
                formData.type,
                formData.description
            );
          
       
       
            setFormData({
                name: '',
                email: '',
                telephone: '',
                type: 'Технические неполадки',
                description: ''
            });
        } catch(e) {
            console.log(e);
            alert('Произошла ошибка при отправке вопроса');
        }
    };

    return (
        <section className={styles.join}>
            <div className={styles.join__inner}>
                <div className={styles.join__info}>
                    <div className={styles.join__info__wrapper}>
                        <div className={styles.join__content}>
                            <div className={`${styles.join__decor}`}>
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}`} />
                            </div>

                            <ul className={styles.join__list}>
                                {list.map((item, index) => (
                                    <li key={index} className={styles.join__item}>
                                        <img src={Cross}
                                            className={styles.join__icon}
                                            alt="Icon"
                                        />
                                        <div className={styles.join__item__block}>
                                            <p className={styles.join__text__title}>
                                                {item.title}
                                            </p>
                                            <p className={styles.join__text}>
                                                {item.about}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className={`${styles.join__decor} ${styles.join__decorBottom} `}>
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}  `} />
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                            </div>
                        </div>
                        <img className={styles.join__image}
                            src={Bird}
                            alt="Bird"
                        />
                    </div>
                </div>

                <div className={styles.join__preview}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.form__content}>
                            <div className={styles.form__header}>
                                <h2 className={styles.form__title}>
                                    Связаться с нами
                                </h2>
                                <p className={styles.form__about}>
                                    Свяжитесь с нами и получите ответы на возникшие вопросы
                                </p>
                            </div>
                            <div className={styles.form__fields}>
                                <input 
                                    name="name" 
                                    type="text" 
                                    className={styles.form__field} 
                                    placeholder="Ваше имя" 
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input 
                                    name="email" 
                                    type="email" 
                                    className={styles.form__field} 
                                    placeholder="Ваша электронная почта" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input 
                                    name="telephone" 
                                    type="tel" 
                                    className={styles.form__field} 
                                    placeholder="Ваш телефон" 
                                    required 
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                                <select 
                                    name="type" 
                                    className={styles.form__select}
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="Технические неполадки">
                                        Технические неполадки
                                    </option>
                                    <option value="Проблема с оплатой">
                                        Проблема с оплатой
                                    </option>
                                    <option value="Восстановить аккаунт">
                                        Восстановить аккаунт
                                    </option>
                                    <option value="Другое">
                                        Другое
                                    </option>
                                </select>
                                <textarea 
                                    name="description"
                                    placeholder="Опишите вашу проблему"
                                    className={styles.form__textarea}
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className={styles.form__btn}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default HelpForm;

/* import styles from "./HelpForm.module.scss"

import { list } from "./consts";

import Cross from "../../assets/cross.png"
import Bird from "../../assets/SmallBird.png"
import QuestionService from "../../services/Questions";
const HelpForm = () => {

    const handleSend = async () => {
try {
    await QuestionService.SendQuestion()
} catch(e) {
    console.log(e)
}
    }
    return (
        <section className={styles.join}  >
            <div className={styles.join__inner}>

                <div className={styles.join__info}>
                    <div className={styles.join__info__wrapper}>
                        <div className={styles.join__content}>
                            <div className={`${styles.join__decor}`}>
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}`} />
                            </div>


                            <ul className={styles.join__list}>

                            {list.map((item, index) => (
                                    <li key={index} className={styles.join__item} >
                                        
                                        <img src={Cross}
                                            className={styles.join__icon}
                                            alt="Icon"
                                        />
                                        <div className={styles.join__item__block}>

                                        <p className={styles.join__text__title}>
                                            {item.title}
                                        </p>
                                        <p className={styles.join__text}>
                                            {item.about}
                                        </p>
                                        </div>
                                    </li>
                                    ))}
                          
                            </ul>

                            <div className={`${styles.join__decor} ${styles.join__decorBottom} `}>
                                <div className={`${styles.join__circle} ${styles.join__circleS} ${styles.join__circleEnd}  `} />
                                <div className={`${styles.join__circle} ${styles.join__circleB}`} />
                            </div>
                        </div>
                        <img className={styles.join__image}
                            src={Bird}
                            alt="Bird"
                        />
                    </div>
                </div>



                <div className={styles.join__preview}>
                    <form className={styles.form}>
                        <div className={styles.form__content}>
                            <div className={styles.form__header}>
                                <h2 className={styles.form__title}>
                                    Связаться с нами
                                </h2>
                                <p className={styles.form__about}>
                                    Свяжитесь с нами и получите ответы на возникшие вопросы
                                </p>
                            </div>
                            <div className={styles.form__fields}>
                                <input name="name" type="text" className={styles.form__field} placeholder="Ваше имя" required />
                                <input name="name" type="email" className={styles.form__field} placeholder="Ваша электронная почта" required />
                                <input name="name" type="tel" className={styles.form__field} placeholder="Ваш телефон" required />
                                <select className={styles.form__select}>
                                    <option>
                                        Технические неполадки
                                    </option>
                                    <option>
                                        Проблема с оплатой
                                    </option>
                                    <option>
                                        Восстановить аккаунт
                                    </option>
                                    <option>
                                        Другое
                                    </option>
                                </select>
                                <textarea placeholder="Опишите вашу проблему"
                                    className={styles.form__textarea}

                                />
                            </div>
                            <button type="submit" className={styles.form__btn}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </section>
    );
}

export default HelpForm;
  */