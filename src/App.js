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

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  toggleHidden() {
    console.log("toggle running")
    this.setState({
      isHidden: !this.state.isHidden

    })
  }

  render() {
    console.log("this.state.isHidden", this.state.isHidden)
    return (
      <div className="App">
        <div className="logo">
          <h1 className="logoText">END .</h1>
        </div>
        <div onClick={this.toggleHidden.bind(this)}>
          <NavHeader ></NavHeader>
        </div>

        <NavSubMenu isHidden={this.state.isHidden}></NavSubMenu>
      </div>
    );


  }
}

export default App;
