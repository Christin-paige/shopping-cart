import { useContext } from 'react';
import { CartContext } from '../context/cart';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartSummary from './cart-summary';
//import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Cart() {

   const { cartItems } = useContext(CartContext)
   const { removeFromCart, clearCart, cartQuantity } = useContext(CartContext)

   return (
    <Container className="shopping-cart">
    
   <Row md={1}>
   <h2>Shopping Bag</h2>
    <div className="cart-headers">
   <p className= "item-heading">Item</p>
   <p className="price-heading">Price</p>
   <p className="quantity-heading">Quantity</p>
   </div>
        {cartItems.map(
          (item) =>
            item && (
              <div className="grid-items" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item" />
                <div className = "description">
                    <div className="title-price">
                <div className="title">
                <Col>{item.title}</Col> 
                </div>
                <div className="price">
               <Col> ${item.price}</Col> 
               </div>
               </div>
              
                 </div>
               <div className="quantity-buttons">
                  <Button className="button" onClick={() => cartQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</Button>
                  {item.quantity}
                  <Button className="button" onClick={() => cartQuantity(item.id, 1)}>+</Button>
                  <Button className="button" onClick={() => removeFromCart(item)}>remove</Button>
                  </div>
                </div>
               
              
               
            )
           
        )}
        <div className="clear-cart-button">
         <Button className="clear-cart" onClick={() => clearCart()}>clear cart</Button>
      </div>
      </Row>
    
      <CartSummary />
      </Container>
      
   )
  
}
   /* const { closeCart, isOpen } = useContext(CartContext)


    const { removeFromCart, clearCart } = useContext(CartContext)

    return (
        <>
      
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
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
    )*/
