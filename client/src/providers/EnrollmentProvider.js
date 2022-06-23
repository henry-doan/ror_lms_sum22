import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EnrollmentContext = React.createContext();

export const EnrollmentConsumer = EnrollmentContext.Consumer;

const EnrollmentProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState([])

  const navigate = useNavigate()

  const getAllEnrollments = (courseId) => {
    axios.get(`/api/courses/${courseId}/enrollments`)
    .then( res => setEnrollments(res.data) )
    .catch( err => console.log(err) )
  }

  const addEnrollment = (courseId, enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
     .then( res => setEnrollments([...enrollments, res.data]) )
     .catch( err => console.log(err) )
  }
 
  const updateEnrollment = (courseId, id, enrollment) => {
    axios.put(`/api/courses/${courseId}/enrollments/${id}`, { enrollment })
      .then( res => {
        const newUpdateEnrollment = enrollments.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setEnrollments(newUpdateEnrollment)
        navigate(`/${courseId}/enrollments`)
      })
      .catch( err => console.log(err) )
  }

  const deleteEnrollment = (courseId, id) => {
    axios.delete(`/api/courses/${courseId}/enrollments/${id}`)
      .then( res => {
         setEnrollments(enrollments.filter( e => e.id !== id ) )
         navigate(`/${courseId}/enrollments`) 
      })
      .catch( err => console.log(err) )
  }

  return (
    <EnrollmentContext.Provider value={{
       enrollments,
       getAllEnrollments,
       addEnrollment,
       updateEnrollment,
       deleteEnrollment,
    }}>
       { children }
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentProvider;