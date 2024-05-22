import { useState } from 'react'
import React from 'react'
import AppointmentList from '../components/AppointmentList'
import Doctors from '../components/Doctors'
import {doctorData, appointmentData} from '../helpers/data'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {

  const [doctors, setDoctors] = useState(doctorData)
  const [appointments, setAppointments] = useState(appointmentData)

  console.log(doctors)
  console.log(appointments)
  return (
    <div className='text-center mt-2'>
      <h1 className='display-5 text-info'>DAİSY HOSPİTAL</h1>
      <Doctors 
      doctors={doctors} 
      appointments ={appointments}
      setAppointments={setAppointments}
      />
      <AppointmentList 
      setAppointments={setAppointments}
      appointments={appointments}
      />
    </div>
  )
}

export default Home
