import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import header from "./images/header.png"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NavBar(){
return (
    
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="container">
      <div className="header">
    <img className="header" src={header} />
</div>

        <Navbar.Brand href="#home">New!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Womens</Nav.Link>
            <Nav.Link href="#pricing">Mens</Nav.Link>
            <NavDropdown title="Accessories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jewlery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bags
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="shoppingBag"href="#deets">Shopping Bag</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline className="searchForm">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-d"
            />
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}

    
