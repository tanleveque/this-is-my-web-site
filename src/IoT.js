import React, { Component } from 'react';
import './page.css';
import './App.css';
import { Link } from "react-router-dom";


import profilpicture from './image/profil-picture.jpg';
import bannerPage from './image/banner-zolertia.png';
import illuPage1 from './image/IoT-schema-2.png';
import screenshotIoT1 from './image/screenshot-iot-1.png';
import screenshotIoT2 from './image/screenshot-iot-2.png';

import { Container, Col, Row } from 'reactstrap';


class IoT extends Component {
    render() {
        return (
            <div>

                <div className="header"></div>

                <div className="profil-zone">
                    <div className="image-container-page">
                        <Link className="profil-picture" to={'/'}>
                            <img className="profil-picture" src={profilpicture} alt="me" />
                        </Link>
                    </div>
                </div>

                <div className="banner-page-wrapper">
                    <div className="banner-page">
                        <img className="banner-page" src={bannerPage} alt="Projet Zolertia Contiki" />
                    </div>
                </div>

                <div className="spacer"></div>

                <div className="page-content">

                    <h3 className="titre-page-content">Internet of Things : la technologie Zolertia</h3>
                    <div className="spacer"></div>
                    <div className="text-content text-center">

                        <p >L'objectif de ce projet est de se familiariser avec les technologies d’objets connectés (ou IoT : Internet of Things).
                        Nous voulons "connecter" un objet, c'est-à-dire ajouter une connexion Internet pour apporter une valeur supplémentaire
                        en terme de fonctionnalité, d’information, d’interaction avec l’environnement ou d’usage.
                        </p>
                        <p>
                            Les objets connectés ont pour vocation d'être utilisés à distance, de manière autonome et sans fil. Ces contraintes
                            demandent une gestion plus efficiente des ressources d'énergies. Il faut donc optimiser la puissance de calcul et la
                            communication.
                        </p>
                    </div>
                </div>

                <div className="spacer"></div>
                <div className="banner-page">
                    <img className="illustration" src={illuPage1} alt="illustration schema IoT"></img>
                </div>
                <div className="spacer"></div>

                <div className="page-content">
                    <div className="text-content">
                        <p> Nous avons choisi de connecter un potager afin de pouvoir aider un enfant à juger la nécessité d’allumer ou éteindre
                        la lumière sur les pousses. Le but, ici, est d'ajouter une fonction pédagogique au potager via un capteur de lumière
                            et un retour par un indicateur.</p>
                        <p>La luminosité de la pièce est mesurée par un capteur branché à une première carte Zolertia embarquée.
                            La donnée est envoyée par broadcast à la seconde, celle-ci reliée à un ordinateur.</p>
                        <p>Les données sont traitées par la deuxième carte pour savoir si la luminosité est suffisante ou non et
                            suggère une action à l’enfant via l’intermédiaire d'un écran liée à la carte embarquée.</p>
                        <p>Enfin, une visualisation des données est présente sur le tableau de bord créé sur Unidots, une solution
                            de dashbord web pour IoT.</p>
                    </div>
                </div>
            

            <div className="spacer"></div>
            <div>
                <Container>
                    <Row>
                        <Col> <img className="illustration" src={screenshotIoT1} alt="screenshot iot 1"></img> </Col>
                        <Col> <img className="illustration" src={screenshotIoT2} alt="screenshot iot 2"></img></Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer"></div>

            <div className="page-content">

                <div className="text-content">
                    <p>La technologie Zolertia est une solution hardware, ici sous forme d'une carte, fonctionnant avec le protocole 6LoWPan
                    *(IPv6 over Low-power Wireless Personal Area Networks) souvent utilisé pour la domotique. Globalement, le protocole 6LoWPan
                    fait une utilisation plus efficace du protocole IPv6. Il fonctionne à un débit plus faible et il consomme peu d'énergie.
                        Dans notre cas, c'est une solution adéquate.</p>

                    <p>Nous avons utilisé Contiki, un système d'exploitation open source pour carte basse énergie tel que Zolertia. Il nous a permis de développer
                    les programes nécessaire pour traiter les données du capteur de lumière puis les communiquer à l'autre carte et rendre
                        possible ce projet d'objet connecté.</p>
                </div>
            </div>

            <div className="spacer"></div>
            <div className="footer"></div>

            </div >
        );
    }
}

export default IoT;