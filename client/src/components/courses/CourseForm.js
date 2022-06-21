import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CourseForm = ({ addCourse }) => {
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addCourse(course)
    setCourse({ title: '', desc: '', ctype: '' })
  }

  return (
    <>
      <h1>Create Course</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            name='title'
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value})}
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type:</Form.Label>
          <Form.Control
            name='ctype'
            value={course.ctype}
            onChange={(e) => setCourse({ ...course, ctype: e.target.value})}
            placeholder="Type"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            name='desc'
            value={course.desc}
            onChange={(e) => setCourse({ ...course, desc: e.target.value})}
            placeholder="Desciption"
            required
            as="textarea" 
            rows={3} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CourseForm;