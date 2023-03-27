import Product from './Product';
import { Row, Col } from 'react-bootstrap' ;

export function Products() {

    const Card_items = [
        {
            id: 1,
            title: "MacBook",
            imgURL:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 25,
          },
          {
            id: 2,
            title: "Lenovo Yoga",
            imgURL:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 25,
          },
          {
            id: 3,
            title: "Dell lattitude",
            imgURL:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 25,
          },
          {
            id: 4,
            title: "HP Pavillion",
            imgURL:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 25,
          },
          {
            id: 5,
            title: "Acer Aspire",
            imgURL:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 25,
          },
    ]

    return (
        <Row md={2} xs={1} lg={3} className="g-3">
            {Card_items.map((product, index) => (
              <Col key={index}>
                <Product
                  id={product.id}
                  title={product.title}
                  imgURL={product.imgURL}
                  price={product.price}
                />
              </Col>
            ))}
        </Row>
      );
}