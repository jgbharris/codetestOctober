import React, { Component } from "react";
import ListItem from '/Users/jamesharris/Desktop/Code tests/end-clothing-codetest/end-clothing/src/Components/Atoms/ListItem.js';
import './NavHeader.css';


const initialList = [
  {
    id: 'a',
    firstname: 'Latest',
  },
  {
    id: 'b',
    firstname: 'Brands',
  },
  {
    id: 'c',
    firstname: 'Clothing',
  },
  {
    id: 'd',
    firstname: 'Footwear',
  },
  {
    id: 'b',
    firstname: 'Accessories',
  },
  {
    id: 'c',
    firstname: 'Lifestyle',
  },
  {
    id: 'd',
    firstname: 'Gifts',
  },
  {
    id: 'd',
    firstname: 'Sale',
  },
  ];

const NavHeader = () => {
    const [list, setList] = React.useState(initialList);
   
    return (
      // console.log("list", list);
      <div className = "headerContainer">
        <ul >
          {list.map(item => (
            <li  className = "navList" key={item.id} item={item.firstname} >{item.firstname}</li>
          ))}
        </ul>
      </div>
    );
  };
   
  export default NavHeader;