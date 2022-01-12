import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import products from '../../data/products.js';
import Modal from './ProductDetails';
export const UserProducts = () => {
  const [modalShow, setModalShow] = useState(false);

  const userId = useParams().userId;
  const productByUserId = products.filter(
    (product) => product.creator === userId
  );
  return (
    <main className="Card">
      {productByUserId.map((product) => {
        return (
          <Card style={{ width: '12rem', padding: '1rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title className="text-center">{product.title}</Card.Title>
              <div className="Card__button">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Details
                </Button>
              </div>
            </Card.Body>
            <Modal
              items={product}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card>
        );
      })}
    </main>
  );
};
