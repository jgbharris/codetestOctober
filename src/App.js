import React from 'react';
import './App.css';
import Navbar from './Components/Organisms/Navbar.js';
import Button from './Components/Atoms/CTA.js';
import ImageCard from './Components/Atoms/ImageCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ImageCardSection from './Components/Molecules/ImageCardSection.js';




function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <ImageCardSection></ImageCardSection>
    </div>
  );
}

export default App;
