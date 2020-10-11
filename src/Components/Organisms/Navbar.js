import React from 'react';
import testData from '../../testData.js';
import './Navbar.css';


const renderMenu = items => {
    return <ul>
      { items.map(i => {
        return <li>
          <a className = "Category" href={i.name}>{ i.name}</a>    
          <li><a>{ i.children_data && renderMenu(i.children_data) }</a></li>
        </li>
      })}
    </ul>
  }

  const categories = Object.values(testData.navCatagories)
  const categoryChildren =  categories.forEach(index => console.log("element children 1", index.children_data))


  


  // console.log(typeof testData.navCatagories)
  // console.log("Object.values", Object.values(testData.navCatagories))
  // console.log("Object.values - children data", Object.values(testData.navCatagories[0].children_data))
  // console.log("Object.keys - children data", Object.keys(testData.navCatagories))
  // const categoryChildren =  categories.forEach(index => console.log("element children", index.children_data))
  // console.log("categoryChildren", categoryChildren)
  // const categoryChildrenNames = Object.values(categoryChildren)
  // console.log("categoryChildrenNames", categoryChildrenNames)
  
  const Navbar = ({ data }) => {
    return <nav className = "Navbar">
      <h2>{ "Navbar" }</h2>
      { renderMenu(categories) }
    </nav>
  }

  export default Navbar