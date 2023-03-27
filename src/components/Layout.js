import React from 'react';
import Header from './Header';
import { Products } from './Products';
import { Container } from 'react-bootstrap'
import CartItems from './CartItems';
import { useSelector } from 'react-redux';

function Layout() {
    const showCard = useSelector(state => state.card.showCard)
    const itemsList = useSelector(state => state.card.itemsList)
    let total = 0

    itemsList.forEach(item => {
        total += item.totalPrice
    });

    return (
        <>
            <Header />  
            <Container className='mb-4 mt-4'>
                <Products />
                { showCard && <CartItems /> }
                <br/>
                <h3 className='float-end bg-dark text-danger p-3'>Total: {total}</h3>
            </Container>
        </>
    
    );
}

export default Layout;