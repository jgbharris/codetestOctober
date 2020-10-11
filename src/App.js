import React from 'react';
import './App.css';
import Navbar from './Components/Organisms/Navbar.js';
import Button from './Components/Atoms/CTA.js';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import NavSubMenu from './Components/Molecules/NavSubMenu.js';
import NavHeader from './Components/Molecules/NavHeader.js';




function App() {
  return (
    <div className="App">
    <NavHeader></NavHeader>
    <NavSubMenu></NavSubMenu>
    </div>
  );
}

export default App;
