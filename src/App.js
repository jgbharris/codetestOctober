import React, { Component } from "react";
import './App.css';
import Navbar from './Components/Organisms/Navbar.js';
import Button from './Components/Atoms/CTA.js';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import NavSubMenu from './Components/Molecules/NavSubMenu.js';
import NavHeader from './Components/Molecules/NavHeader.js';
import logo from './End-Logo.jpeg';




class App extends React.Component {

  render () {
    return (
      <div className="App">
        <div className="logo">
         <h1 className= "logoText" onClick={this.toggleHidden}>END .</h1>
      </div>
        <NavHeader></NavHeader>
        <NavSubMenu></NavSubMenu>
      </div>
    );

  }
}

export default App;
