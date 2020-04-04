import React, { Component } from 'react';
import './Main.css';
import './App.css';
import { Link } from "react-router-dom";

import profilpicture from './image/profil-picture.jpg';
import iotschema from './image/IoT-schema.png';
import cultureeasy from './image/cultureEasy.png';
import blockchainvsquantumcomputing from './image/bvsqc.jpg';
import {
  Nav, NavItem,
  Card, CardTitle, CardImg, CardImgOverlay, Button, Row
} from 'reactstrap';



class Main extends Component {
  render() {
    return (
      <div>
        <header className="d-none d-md-block d-md-flex flex-row">
          <h3 className="title col-md-4">Tanneguy Levêque</h3>
          <Nav className="justify-content-center col-md-8">
            {/* <NavItem className="myNavItem font-weight-bold">Home</NavItem> */}
            <NavItem className="myNavItem font-weight-bold">Info</NavItem>
            <NavItem className="myNavItem font-weight-bold">Work</NavItem>
          </Nav>

        </header>

        <div className="profil-zone ">
          <Row className="d-flex flex-column flex-md-row justify-content-center">
            <div className="image-container col-md-4">
              <img className="profil-picture" src={profilpicture} alt="me" />
            </div>
            <div className="details-wrapper col-md-8">
              <h3 className="myName d-md-none">Tanneguy Levêque</h3>
              <div className="details">
                <p className="description-court d-md-none">Student in Enginering and UX</p>
                <p className="description-mid d-none d-md-block">Je m'appel Tanneguy, je suis étudiant en double
                diplôme ingénieur à l'ECE Paris et UX à Sup de Pub. </p>
              </div>
            </div>
          </Row>

          <Row>
            <p className="localisation col-12 col-md-4">Paris, France</p>
          </Row>
        </div>

        <div className="d-none d-md-block">
          <Button type="button" class="btn" className="btn-calltoaction">C'est parti !</Button>
        </div>

        <div className="profil-content ">
          <Nav className="justify-content-center d-md-none">
            {/* <NavItem className="myNavItem font-weight-bold">Home</NavItem> */}
            <NavItem className="myNavItem font-weight-bold">Info</NavItem>
            <NavItem className="myNavItem font-weight-bold">Work</NavItem>
          </Nav>


          <Row className="myProject d-flex flex-column flex-md-row justify-content-center ">

            <div className="cover-card-wrapper">
              <div className="cover-card ">
                <Card inverse>
                  <CardImg src={iotschema} alt="Iot schema" />
                  <CardImgOverlay className="cardOverlay">
                    <CardTitle className="card-title">
                      <Link to={'/IoT'}>Internet of Things : la technologie Zolertia </Link>

                    </CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            </div>

            <div className="cover-card-wrapper">
              <div className="cover-card">
                <Card inverse>
                  <CardImg src={cultureeasy} alt="culture easy" />
                  <CardImgOverlay className="cardOverlay">
                    <CardTitle className="card-title">Projet étudiant : Culture Easy</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            </div>

            <div className="cover-card-wrapper">
              <div className="cover-card ">
                <Card inverse>
                  <CardImg src={blockchainvsquantumcomputing} alt="Blockchain vs Quantum Computing" />
                  <CardImgOverlay className="cardOverlay">
                    <CardTitle className="card-title">Blockchain vs Quantum Computing</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            </div>
          </Row>
          <div className="spacer"></div>
        </div>

        <div className="footer"></div>

      </div>
    );
  }
}

export default Main;