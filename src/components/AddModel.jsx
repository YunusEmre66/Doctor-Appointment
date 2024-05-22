import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function AddModal({
  show,
  handleClose,
  drName,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: drName,
      }
    ]);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3 ">
              <Form.Group md="4" controlId="name">
                <Form.Label>Patient name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name..."
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </Form.Group>
              <Form.Group md="4" controlId="datetime">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Row>
       
        <div className="text-center p-3">
          <Button variant="success" type="submit" className="me-2">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
