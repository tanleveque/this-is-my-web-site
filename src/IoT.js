import React, { Component } from 'react';
import './page.css';
import {Link} from "react-router-dom";


import profilpicture from './image/profil-picture.jpg';
import bannerPage from './image/banner-zolertia.png';


class IoT extends Component {
    render() {
        return (
            <div>

                <div className="header"></div>

                <div className="profil-zone">
                    <div className="image-container-page">
                         <Link to={'/'}>
                        <img className="profil-picture" src={profilpicture} alt="me" /></Link>
                    </div>
                </div>

                <div className="banner-page-wrapper">
                    <div className="banner-page">
                        <img className="banner-page" src={bannerPage} alt="Prjet Zolertia Contiki" />
                    </div>
                </div>

                <div className="spacer">
                </div>

                <div className="pageContent">

                    <h3 className="titre-page-content">Internet of Things : la technologie Zolertia</h3>
                    <div className="spacer">
                    </div>
                    <div className="text-content">
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
            </div>
        );
    }
}

export default IoT;