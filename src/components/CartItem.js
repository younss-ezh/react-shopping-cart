import React from 'react';
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { cardActions } from './../store/cart-slice';

function CartItem(props) {
    const dispatch = useDispatch()
    const incrementItems = () => {
        dispatch(cardActions.addToCard({
            id: props.id,
            title: props.title,
            price: props.price
        }))
    }

    const decrementItems = () => {
        dispatch(cardActions.removeFromCard(props.id))
    }

    return (
        <div key={props.id} className='rouded-pill d-flex justify-content-between p-3 m-3' style={{ background: "	#87CEFA" }}> 
            <h2>{props.title}</h2>
            <p>${props.price}</p>
            <h4>Total: ${props.total}</h4>
            <Button onClick={decrementItems}>-</Button>
            <p>x {props.quantity}</p>
            <Button onClick={incrementItems}>+</Button>
        </div>
    );
}

export default CartItem;