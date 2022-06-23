import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CourseConsumer } from '../../providers/CourseProvider';
import { Modal, Button } from 'react-bootstrap';
import CourseForm from './CourseForm';

const CourseShow = ({ updateCourse, deleteCourse }) => {
  const { id } = useParams()
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })
  const { title, desc, ctype} = course
  const [courseUsers, setCourseUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/courses/${id}`)
      .then( res => setCourse(res.data) )
      .catch( err => console.log(err) )
  }, [])

  useEffect( () => {
    axios.get(`/api/courses/${id}/courseUsers`)
      .then( res => setCourseUsers(res.data) )
      .catch( err => console.log(err) )
  }, [])

  return (
    <>
      <h1>Course Title: {title}</h1>
      <h4>Course Description: {desc}</h4>
      <p>Course Type: {ctype}</p>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CourseForm 
            id={id}
            title={title}
            desc={desc}
            ctype={ctype}
            setEdit={setEdit}
            updateCourse={updateCourse}
          />
        </Modal.Body>
      </Modal>

      <Link
        to={`/${id}/enrollments`}
        state={
          { courseTitle: title }
        }
      >
        <button>
          Enrollments
        </button>
      </Link>
      <button onClick={() => deleteCourse(id)}>
        Delete
      </button>
      <br />
      <h1>All of the Users in the course</h1>
      <ul>
        { courseUsers.map( cu => 
          <>
            <li>{cu.first} {cu.last}</li>
            <hr />
          </>  
        )}
      </ul>
    </>
  )
}

const ConnectedCourseShow = (props) => (
  <CourseConsumer>
    { value => <CourseShow {...props} {...value} />}
  </CourseConsumer>
)

export default ConnectedCourseShow;