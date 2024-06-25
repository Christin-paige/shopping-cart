import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

export default function Content() {
  return (
    <Container>
     
      <Row>
      <h1 className="topPicks">Top Picks</h1>
        <Col xs={9} md={6}>
         <Link to="womens"> <Image className="woman"
            src="https://images.pexels.com/photos/2906663/pexels-photo-2906663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          /></Link>
          </Col>
          
          <Col xs={9} md={6}>
          <Image className="jewelery-image"
            src="https://images.pexels.com/photos/16567155/pexels-photo-16567155/free-photo-of-close-up-of-woman-wearing-a-white-top-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          </Col>

          <Col xs={9} md={6}>
          <Image className="mens"
            src="https://images.pexels.com/photos/1194414/pexels-photo-1194414.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          </Col>
         
      
       
      </Row>
    </Container>
  );
}
