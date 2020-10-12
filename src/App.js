import React from "react";
import './App.css';
import NavSubMenu from './Components/Molecules/NavSubMenu.js';
import NavHeader from './Components/Molecules/NavHeader.js';



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
