import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import header from './images/header.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <Container className="nav-container">
      <Nav className="me-auto">
        <div className="header">
          <Image className="header" src={header} />
        </div>
<div className="nav-links">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>

        <Nav.Link to="/womens" as={NavLink}>
          Women
        </Nav.Link>
        <Nav.Link to="/mens" as={NavLink}>
          Mens
        </Nav.Link>
        <Nav.Link to="/jewelery" as={NavLink}>
          Jewelry
        </Nav.Link>
        </div>
      </Nav>
      <Nav.Link to="/shoppingBag" className="shoppingBag">
      <Button variant="outline-primary" className="rounded-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 902.86 902.86">
          <path
            d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
          />
          <path
            d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"
          />
        </svg>
        <div className="circle">3</div>
      </Button>
      </Nav.Link>
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
