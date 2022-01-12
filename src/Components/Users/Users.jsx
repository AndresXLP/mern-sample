import './users.scss';
import users from '../../data/users.js';
import { Card, Button } from 'react-bootstrap';
export const Users = () => {
  return (
    <main className="Card">
      {users.map((user) => {
        return (
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title className="text-center">{user.name}</Card.Title>
              <div className="Card__button">
                <Button variant="primary" href={`/${user.id}/products`}>
                  View Products
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </main>
  );
};
