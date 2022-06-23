import { useState, } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Modal } from 'react-bootstrap';
import { MainBtn } from '../styles/shared';
import { CourseConsumer } from '../../providers/CourseProvider';

const Courses = ({ addCourse, courses }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <MainBtn onClick={() => setAdd(true)}>
        +
      </MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CourseForm addCourse={addCourse} />
        </Modal.Body>
      </Modal>

      <CourseList 
        courses={courses}
      />
    </>
  )
}

const ConnectedCourses = (props) => (
  <CourseConsumer>
    { value => <Courses {...props} {...value} />}
  </CourseConsumer>
)

export default ConnectedCourses;