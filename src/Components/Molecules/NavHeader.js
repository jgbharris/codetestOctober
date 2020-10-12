import React from "react";
import './NavHeader.css';


const initialList = [
  {
    id: 'a',
    name: 'Latest',
  },
  {
    id: 'b',
    name: 'Brands',
  },
  {
    id: 'c',
    name: 'Clothing',
  },
  {
    id: 'd',
    name: 'Footwear',
  },
  {
    id: 'e',
    name: 'Accessories',
  },
  {
    id: 'f',
    name: 'Lifestyle',
  },
  {
    id: 'g',
    name: 'Gifts',
  },
  {
    id: 'h',
    name: 'Sale',
  },
  ];

const NavHeader = () => {
    const [list, setList] = React.useState(initialList);
   
    return (
      <div className = "headerContainer">
        <ul >
          {list.map(item => (
            <li  className = "navList" key={item.id} item={item.firstname} >{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
   
  export default NavHeader;