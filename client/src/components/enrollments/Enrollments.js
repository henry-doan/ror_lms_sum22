import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EnrollmentList from './EnrollmentList';
import EnrollmentForm from './EnrollmentForm';
import { MainBtn } from '../styles/shared';
import { Modal } from 'react-bootstrap';

const Enrollments = () => {
  // const [enrollments, setEnrollments] = useState([])
  const [teachers, setTeachers] = useState([])
  const [tas, setTas] = useState([])
  const [students, setStudents] = useState([])
  const [enrolledUsers, setEnrolledUsers] = useState([])
  const [adding, setAdd] = useState(false)
 
  const { courseId } = useParams()
  const location = useLocation()
  const { courseTitle } = location.state

  useEffect( () => {
    axios.get(`/api/courses/${courseId}/enrollments`)
      .then( res => {
        // setEnrollments(res.data)
        setTeachers(res.data.teachers)
        setTas(res.data.tas)
        setStudents(res.data.students)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/courses/${courseId}/enrolled`)
      .then(res => {
        setEnrolledUsers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const whichRole = (enroll) => {
    const { role } = enroll
    switch(role) {
      case 'student':
        setStudents([...students, enroll])
        break
      case 'ta':
        setTas([...tas, enroll])
        break
      default:
        setTeachers([...teachers, enroll])
    }
  }

  const addEnrollment = (enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
      .then( res => {
        whichRole(res.data)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <MainBtn onClick={() => setAdd(true)}>
        +
      </MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <EnrollmentForm 
            addEnrollment={addEnrollment} 
          />
        </Modal.Body>
      </Modal>

      <h2>All Enrollments for {courseTitle}</h2>
      {/* <EnrollmentList 
        enrollments={enrollments}
      /> */}
      <h3>Teachers</h3>
      <EnrollmentList
        enrollments={teachers}
        enrolledUsers={enrolledUsers}
      />
      <br />
      <h3>Tas</h3>
      <EnrollmentList
        enrollments={tas}
        enrolledUsers={enrolledUsers}
      />
      <br />
      <h3>Students</h3>
      <EnrollmentList
        enrollments={students}
        enrolledUsers={enrolledUsers}
      />
      <br />
    </>
  )
}

export default Enrollments;