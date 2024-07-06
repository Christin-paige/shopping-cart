import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/cart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Jewelry() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      //this was displaying all of the items, so I have to figure out how to display specific items
      //setItems(data)

      //filter!!!
      .then((data) => {
        const specificItems = data.filter(
          (item) => item.id === 8 || item.id === 7 || item.id === 6
        );

        setItems(specificItems);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>a network error was encountered</p>;

  return (
    <div>
      <h2>The Jewels</h2>
      <Container className="card-container">
        <Row>
              {items.map(
                (item) =>
                  item && (
                    <Col key={item.id} sm={12} md={6} lg={4}>
                      <Card className="card-body" style={{width: '18rem' }}>
                      <Card.Img variant="top" src={item.image} alt={item.title} />
                      <Card.Body>
                      <Card.Title className="text-center">{item.title}</Card.Title>
                      <Card.Text className="text-center">${item.price}</Card.Text>
                      <Button className="bag-button" onClick={() => addToCart(item)}>
                        add to bag
                      </Button>
                      </Card.Body>
                      </Card>
                      </Col>
                  )
              )}
           
         
        </Row>
      </Container>
    </div>
  );
}

