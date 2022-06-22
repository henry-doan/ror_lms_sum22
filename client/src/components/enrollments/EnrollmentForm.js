import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EnrollmentForm = ({ addEnrollment }) => {
  const [enrollment, setEnrollment] = useState({ role: 'student', user_id: 0 })
  const [unenrolled, setUnenrolledUsers] = useState([])

  const { courseId } = useParams()

  useEffect( () => {
    axios.get(`/api/courses/${courseId}/unenrolled`)
      .then( res => setUnenrolledUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnrollment({ ...enrollment, user_id: parseInt(enrollment.user_id)})
    addEnrollment(enrollment)
    setEnrollment({ role: 'student', user_id: 0 })
  }

  return (
    <>
      <h1>Create Enrollment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            name='role'
            value={enrollment.role}
            onChange={(e) => setEnrollment({ ...enrollment, role: e.target.value })}
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="ta">Ta</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            name='user_id'
            value={enrollment.user_id}
            onChange={(e) => setEnrollment({ ...enrollment, user_id: e.target.value })}
            required
          >
            { unenrolled.map( u => 
              <option value={u.id}>{u.first} {u.last}</option>
            )}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default EnrollmentForm;