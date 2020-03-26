import React, { Component } from 'react';
import profilpicture from './image/profil-picture.jpg';
//import Main from './Main';

class IoT extends Component {
    render() {
        return (
            <div>
            <div className="profil-zone">
                <div className="image-contour">
                    <div className="image-container">
                        <img className="profil-picture" src={profilpicture} alt="me" />
                    </div>
                </div>
            </div>

            <div>
                <p>L'objectif de ce projet est de se familiariser avec les technologies d’objets connectés (ou IoT : Internet of Things).
                Nous voulons "connecter" un objet, c'est-à-dire ajouter une connexion Internet pour apporter une valeur supplémentaire
                en terme de fonctionnalité, d’information, d’interaction avec l’environnement ou d’usage.

                Les objets connectés ont pour vocation d'être utilisés à distance, de manière autonome et sans fil. Ces contraintes
                demandent une gestion plus efficiente des ressources d'énergies. Il faut donc optimiser la puissance de calcul et la
                communication.
                </p>
            </div>
</div>
        );
    }
}

export default IoT;