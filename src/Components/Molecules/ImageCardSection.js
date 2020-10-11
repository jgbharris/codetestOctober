import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './ImageCardSection.css';



const ImageCardSection = (props) => (
    <Container>
        <Row>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src="https://media.endclothing.com/media/catalog/category/25-04-19_Dropdown_Latest_CavEmpt.jpg" />
                    <Card.Body>
                        <Card.Title className="title">Card Title 2</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className="card">
                    <Card.Img variant="top" src="https://media.endclothing.com/media/catalog/category/25-04-19_Dropdown_Latest_CavEmpt.jpg" />
                    <Card.Body>
                        <Card.Title className="title">Card Title 1</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src="https://media.endclothing.com/media/catalog/category/25-04-19_Dropdown_Latest_CavEmpt.jpg" />
                    <Card.Body>
                        <Card.Title className="title">Card Title 3</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className="card">
                    <Card.Img variant="top" src="https://media.endclothing.com/media/catalog/category/25-04-19_Dropdown_Latest_CavEmpt.jpg" />
                    <Card.Body>
                        <Card.Title className="title">Card Title 4</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
)

export default ImageCardSection