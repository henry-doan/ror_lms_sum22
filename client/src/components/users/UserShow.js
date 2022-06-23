import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import UserForm from "./UserForm";
import { UserConsumer } from "../../providers/UserProvider";

const UserShow = ({ updateUser, deleteUser }) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first: '', last: '', image: '' })
  const { first, last, image } = user 
  const [userCourses, setUserCourses] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/users/${id}/userCourses`)
      .then( res => setUserCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{first} {last}</h1>
      <img 
        src={image}
        alt="profile"
        width='300px'
      />
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UserForm 
            id={id}
            first={first}
            last={last}
            image={image}
            setEdit={setEdit}
            updateUser={updateUser}
          />
        </Modal.Body>
      </Modal>

      <Button onClick={() => deleteUser(id)}>
        Delete
      </Button>
      <br />
      { userCourses.map( uc => 
        <div>
          <h1>{uc.title}</h1>
          <p>{uc.desc}</p>
          <p>{uc.cType}</p>
        </div> 
      )}
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUserShow;