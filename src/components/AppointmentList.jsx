import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { TiDelete } from 'react-icons/ti'
import { FaTimesCircle } from "react-icons/fa"
 
const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));

  }

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) => 
      item.id === id ? {...item , consulted: !item.consulted } : item

      )
    )
  }


  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <div className="d-flex flex-column align-items-center">
        {!appointments.length && (
          <img src="./img/appointment.jpg" width="80%" />
        )}

        {appointments.map((item) => {
          const { id, patient, consulted, doctor, day } = item;
          return (
            <div
              key={id}
              className={consulted ? "appointments consulted" : "appointments"}
              onDoubleClick = {() => handleDoubleClick(id)}
            >
              <Row className="justify-content-center align-items-center g-3">
                <Col xs={12} sm={12} md={5}>
                  <h4 className="text-info">{patient}</h4>
                  <h4>{doctor}</h4>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h5>Date: {new Date(day).toLocaleDateString()} </h5>
                  <h6>Time: {new Date(day).toLocaleTimeString()} </h6>
                </Col>
                <Col xs={2} sm={4} md={1}>


                 <FaTimesCircle
                  className="text-danger fs-1"
                  type="button"
                  onClick={() => handleDelete(id)}/>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
