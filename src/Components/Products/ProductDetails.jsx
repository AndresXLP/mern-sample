import { Modal, Button, Table } from 'react-bootstrap';
import './Styles.scss';
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center" id="contained-modal-title-vcenter">
          {props.items.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Card__img">
          <img className="w-50" src={props.items.img} alt="Asus Rog" />
          <h4>Price $ {props.items.price}</h4>
        </div>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Model</td>
              <td>{props.items.description.model}</td>
            </tr>
            <tr>
              <td>Ram</td>
              <td>{props.items.description.ram}</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>{props.items.description.storage}</td>
            </tr>
            <tr>
              <td>GUP</td>
              <td>{props.items.description.gpu}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
