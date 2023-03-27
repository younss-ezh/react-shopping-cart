import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function CartItems() {
    const cardItems = useSelector(state => state.card.itemsList)

    return (
        <div className='border border-dark mt-4'>
            { cardItems.map((item) => (
                <div key={item.id}>
                    <CartItem id={item.id} title={item.title} price={item.price} total={item.totalPrice} quantity={item.quantity} />
                </div>
            )) }
        </div>
    );
}

export default CartItems;