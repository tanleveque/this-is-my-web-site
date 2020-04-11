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
  Card, CardImg, Row, Container
} from 'reactstrap';



class Main extends Component {
  render() {
    return (
      <div>
        <header className="d-none d-md-block d-md-flex flex-row">
          <h3 className="title col-md-4">Tanneguy Levêque</h3>
          <div className="justify-content-end col-md-8 MyNavBar d-flex flex-row">
            {/* <NavItem className="myNavItem font-weight-bold">Home</NavItem> */}
            <div className="myNavItem font-weight-bold">Info</div>
            <div className="myNavItem font-weight-bold">Work</div>
          </div>
        </header>

        <div className="spacer"></div>

        <Container>
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
        </Container>

{/*         <Container className="d-none d-md-block">
          <div className="btnCallToAction" >
            <Link to={''}> C'est parti !</Link>
          </div>
        </Container>
 */}
        <div className="profil-content">
          <Nav className="justify-content-center d-md-none">
            {/* <NavItem className="myNavItem font-weight-bold">Home</NavItem> */}
            <NavItem className="myNavItem font-weight-bold">Info</NavItem>
            <NavItem className="myNavItem font-weight-bold">Work</NavItem>
          </Nav>

          <Container>
            <Row className="myProject flex-column flex-md-row">
              <div className="col-md-4">
                <Card >
                  <CardImg src={iotschema} alt="Iot schema" />
                  <div className="titleBoxShadow">
                    <Link to={'/IoT'}>Internet of Things : la technologie Zolertia </Link>
                  </div>
                </Card>
              </div>

              <div className="col-md-4">
                <Card >
                  <CardImg src={cultureeasy} alt="image culture easy" />
                  <div className="titleBoxShadow">
                    <Link to={'/IoT'}>Projet étudiant : Culture Easy </Link>
                  </div>
                </Card>
              </div>

              <div className="col-md-4">
                <Card >
                  <CardImg src={blockchainvsquantumcomputing} alt="image blockchain et ordinateur quantique" />
                  <div className="titleBoxShadow">
                    <Link to={'/IoT'}>Blockchain vs Quantum Computing</Link>
                  </div>
                </Card>
              </div>
            </Row>
          </Container>
          <div className="spacer"></div>
        </div>




        <div className="footer"></div>

      </div>
    );
  }
}

export default Main;