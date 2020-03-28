import React, { Component } from 'react';
import './Main.css';
import './App.css';
import {Link} from "react-router-dom";

import profilpicture from './image/profil-picture.jpg';
import iotschema from './image/IoT-schema.png';
import cultureeasy from './image/cultureEasy.png';
import blockchainvsquantumcomputing from './image/bvsqc.jpg';
import {
  Nav, NavItem,
  Card, CardTitle, CardImg, CardImgOverlay
} from 'reactstrap';



class Main extends Component {
  render() {
    return (
      <div>

        <div className="profil-banner"></div>
        <div className="profil-zone">
          <div className="image-contour">
            <div className="image-container">
              <img className="profil-picture" src={profilpicture} alt="me" />
            </div>
          </div>

          <div>
            <h3 className="myName">Tanneguy Levêque</h3>
            <div className="details">
              <p className="description">Student in Enginering and UX</p>
              <p className="localisation">Paris, France</p>
            </div>
          </div>
        </div>

        <div className="profil-content ">
          <Nav className="justify-content-center">

            <NavItem className="myNavItem font-weight-bold">Info</NavItem>
            <NavItem className="myNavItem font-weight-bold">Work</NavItem>
          </Nav>

          <div className="myProject">
            <div className="coverCard">
              <Card inverse>
                <CardImg src={iotschema} alt="Iot schema" />
                <CardImgOverlay className="cardOverlay">
                  <CardTitle className="card-title">
                    <Link to={'/IoT'}>Internet of Things : la technologie Zolertia </Link>
                    
                    </CardTitle>
                </CardImgOverlay>
              </Card>
            </div>

            <div className="coverCard">
              <Card inverse>
                <CardImg src={cultureeasy} alt="culture easy" />
                <CardImgOverlay className="cardOverlay">
                  <CardTitle className="card-title">Projet étudiant : Culture Easy</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>

            <div className="coverCard">
              <Card inverse>
                <CardImg src={blockchainvsquantumcomputing} alt="Blockchain vs Quantum Computing" />
                <CardImgOverlay className="cardOverlay">
                  <CardTitle className="card-title">Blockchain vs Quantum Computing</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          </div>
   
        </div>

        
        <div className="spacer"></div>
        <div className="footer"></div>

      </div>
    );
  }
}

export default Main;