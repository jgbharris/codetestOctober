import React from 'react';
import ListItem from '../Atoms/ListItem.js'
import './SubMenuList.css';
import testData from '../../testData.js';

const initialList = [
  {
    id: 'a',
    name: 'New This Week',
  },
  {
    id: 'b',
    name: 'Latest Sneakers',
  },
  {
    id: 'c',
    name: 'Latest Women',
  },
  {
    id: 'd',
    name: 'Latest Kids',
  },
  // testData.navCatagories
];

const SubMenuList = () => {
  const [list, setList] = React.useState(initialList);
 
  return (
    <div>
      {console.log("testData.navCatagories", testData.navCatagories)}

      <ul className = "list" >
        {list.map(item => (
          <div className = "subMenuListItem">
            <ListItem key={item.id} item={item.name} />
          </div>
          
        ))}
      </ul>
    </div>
  );
};
 
export default SubMenuList;
   
 