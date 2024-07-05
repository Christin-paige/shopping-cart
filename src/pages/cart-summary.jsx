import { useContext } from 'react';
import { CartContext } from '../context/cart';

export default function CartSummary() {

    const { cartTotalPrice } = useContext(CartContext)
    return (
     
        <div className="summary">
<h2>Summary</h2>
<p>Subtotal: {cartTotalPrice}</p>
<p>Shipping: TBD</p>
<p>Estimated Tax: $0.00</p>
<p><strong>Total: {cartTotalPrice} </strong></p>
</div>
       
    )
}