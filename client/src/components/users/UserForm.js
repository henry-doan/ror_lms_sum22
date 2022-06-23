import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, id, first, last, image, setEdit, updateUser }) => {
  const [user, setUser] = useState({ first: '', last: '', image: '' })

  useEffect( () => {
    if (id) {
      setUser({ first, last, image })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    setUser({ first: '', last: '', image: '' })
  }

  return (
    <>
      <h1>{id ? 'Edit' : 'Create'} User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first'
            value={user.first}
            onChange={(e) => setUser({ ...user, first: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last'
            value={user.last}
            onChange={(e) => setUser({ ...user, last: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            name='image'
            value={user.image}
            onChange={(e) => setUser({ ...user, image: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm;