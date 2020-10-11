import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubMenuList from './SubMenuList.js';
import ImageCardSection from './ImageCardSection.js';



const NavSubMenu = (props) => {
    if(!props.isHidden) {
        return <Container>
            <Row>
                <Col>
                    <SubMenuList></SubMenuList>
                </Col>
                <Col>
                    <SubMenuList></SubMenuList>
                </Col>
                <Col xs={6}>
                    <ImageCardSection></ImageCardSection>
                </Col>
            </Row>
        </Container>
    } else {
        return null
    }
   
}
    



export default NavSubMenu