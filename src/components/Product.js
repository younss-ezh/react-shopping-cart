import React from 'react';
import { Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from './../store/cart-slice';


function Product(props) {

    const dispatch = useDispatch()

    const addToCard = () => {
        dispatch(cardActions.addToCard({
            id: props.id,
            title: props.title,
            price: props.price
        }))
    }

    return (
        <Card className="h-100" id={props.id}>
        <Card.Img variant="top" src={props.imgURL} height="200" style={{ objectFit: 'cover' }} />
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{props.title}</span>
                <span className="ms-2 text-muted">${props.price}</span>
            </Card.Title>
                <Button className="w-100" onClick={addToCard}>+ Add To Card</Button>
        </Card.Body>
    </Card>
    );
}

export default Product;