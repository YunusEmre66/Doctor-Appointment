import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddModal from "./AddModel";

const Doctors = ({ doctors, appointments, setAppointments }) => {

  const [show, setShow] = useState  (false);
  const [selecterDrName , setSelecterDrName] = useState("")

 const handleClick= (drName) => {
  setShow(true)
  setSelecterDrName(drName)
 }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img 
            src={dr.img} 
            alt={dr.name} 
            className='img-thumbnail doctor-img'
            onClick={() => handleClick(dr.name)}
            
            />
            <h5>{dr.name}</h5>
            <h5>{dr.dep}</h5>
          </Col>
        ))}
      </Row>
      <AddModal
      show={show}
      drName={selecterDrName}
      handleClose ={() =>setShow(false)}
      appointments={appointments}
      setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
