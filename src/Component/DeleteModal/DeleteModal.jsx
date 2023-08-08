import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ setShow, show, handleDelete }) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="heading4">Delete</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p className="p1"> are you sure you want to delete </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="outlinebtn1"
            style={{ width: "100px", height: "40px" }}
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button className="btn1" onClick={handleDelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
