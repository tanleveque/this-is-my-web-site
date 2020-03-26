import React, { Component } from 'react';
import './Main.css';
import profilpicture from './image/profil-picture.jpg';

class App extends Component {
  render() {
    return (
      <div>

        <div className="profil-banner"></div>

        <div className="image-contour">
          <div className="image-container">
            <img className="profil-picture" src={profilpicture} alt="me" />
          </div>
        </div>

        <div>
          <p className="myName">Tanneguy Levêque</p>
            <div className="details">
              <p className="description">Student in Enginering and UX</p>
              <p className="localisation">Paris, France</p>
            </div>
        </div>

        <div>
          <ul>
            <li className="list">Info</li>
            <li className="list">Work</li>
          </ul>
        </div>



      </div>
    );
  }
}

export default App;