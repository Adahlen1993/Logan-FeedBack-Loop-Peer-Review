import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function SubmissionSuccess({ show, setShow }) {
  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    window.location.href =
      'https://youtu.be/dQw4w9WgXcQ?si=ycZC2TQd2xJQv8jT&t=1';
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Submission Successful!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your form has been successfully submitted.</Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={() => history.push('/')}
        >
          Leave New Feedback
        </Button>
        <Button
          variant='danger'
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
