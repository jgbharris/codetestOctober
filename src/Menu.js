import React from 'react';
import Data from './Data';

const renderMenu = items => {
    return <ul>
      { items.map(i => {
        return <li>
          <a href={i.link}>{ i.title }</a>
          { i.menu && renderMenu(i.menu) }
        </li>
      })}
    </ul>
  }
  
  const Menu = ({ data }) => {
    return <nav>
      <h2>{ Data.title }</h2>
      { renderMenu(Data.menu) }
    </nav>
  }

  export default Menu
  