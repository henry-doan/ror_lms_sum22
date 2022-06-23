import { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { MainBtn } from '../styles/shared';
import { Modal } from 'react-bootstrap';
import { UserConsumer } from '../../providers/UserProvider';

const Users = ({ users, addUser }) => {
  const [adding, setAdd] = useState(false)

  return(
    <>
      <MainBtn onClick={() => setAdd(true)}>
        +
      </MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UserForm addUser={addUser} />
        </Modal.Body>
      </Modal>
      
      <UserList users={users} />
    </>
  )
}

const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <Users {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUsers;