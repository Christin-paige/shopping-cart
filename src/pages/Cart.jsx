import { useContext, useState } from 'react';
import { CartContext } from '../context/cart';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Cart() {

    const { cartItems } = useContext(CartContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { removeFromCart, clearCart } = useContext(CartContext)

    return (
        <>
        <Button onClick={handleShow}>
            open cart
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="cart-container">
        {cartItems.map(
          (item) =>
            item && (
              <div className="shirts" key={item.id}>
                <img src={item.image} alt={item.title} className="item" />
                <div className="description">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button onClick={() => removeFromCart(item)}>remove</Button>
                  
                </div>
               
              </div>
               
            )
           
        )}
         <Button className="clear-cart" onClick={() => clearCart()}>clear cart</Button>
      </div>
      
      </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}