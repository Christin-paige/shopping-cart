import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import header from "./images/header.png"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cart from './images/shopping-cart.png';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


export default function NavBar(){
return (
      <Container className="container">
         <Nav className="me-auto">
      <div className="header">
    <Image className="header" src={header} />
</div>


        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
    
         
            <Nav.Link to="/womens" as={NavLink}>
                Women
                </Nav.Link>
                <Nav.Link to="/mens" as={NavLink}>
                Mens
                </Nav.Link>
                <Nav.Link to="/jewelery" as={NavLink}>
                Jewelery
                </Nav.Link>
       
         
            <Nav.Link to="/shoppingBag"className="shoppingBag">Shopping Bag</Nav.Link>
          </Nav>
          <Button>
          <img className="cart" src={cart}/>
          <div className="circle">3</div>
          </Button>
        
       
  

         
        <Form inline className="searchForm">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="d-inline"
            />
          </Col>
        </Row>
      </Form>
      </Container>
  
  );
}

    
