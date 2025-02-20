import { useState } from "react";
import { Container, Card, Button, Form, ListGroup, Row, Col } from "react-bootstrap";
import styles from "./TutorPersonalPage.module.scss"
import TutorPamel from "./TutorPanel/TutorPanel";
import PanelBtns from "./PanelBtns/PanelBtns";
import { useSelector } from "react-redux";
import { TutorSelector } from "../../store/selectors/Tutor.selector";


const TutorPersonalPageComponent: React.FC = () => {
const tutor = useSelector(TutorSelector)

    return (
        <section

            className={styles.tutor}>
            <div className={styles.tutor__container}>
                <TutorPamel 
                username={tutor.user.username}
                email={tutor.user.email}
                />
             
            </div>
        </section>
    );
};

export default TutorPersonalPageComponent;











/* import { Container } from "react-bootstrap";
const TutorPersonalPageComponent = () => {

    return (
        <section>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: "auto", maxWidth: "1430px", padding: "0px 15px", width: "100%" }}>
                <div className="text-center">
                    <h2>Центрированный контейнер</h2>
                </div>
            </Container>
        </section>
    );
}

export default TutorPersonalPageComponent;

  */