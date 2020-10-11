import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListItem from '/Users/jamesharris/Desktop/Code tests/end-clothing-codetest/end-clothing/src/Components/Atoms/ListItem.js'
import './SubMenuList.css';

const initialList = [{
  id: 'a',
  firstname: 'Robin',
},
{
  id: 'b',
  firstname: 'Dave',
},
{
  id: 'c',
  firstname: 'Jim',
},
{
  id: 'd',
  firstname: 'Matt',
},
];

const SubMenuList = () => {
  const [list, setList] = React.useState(initialList);
 
  return (
    <div>

      <ul className = "list" >
        {list.map(item => (
          <ListItem key={item.id} item={item.firstname} />
        ))}
      </ul>
    </div>
  );
};
 
export default SubMenuList;
   
 