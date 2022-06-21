import { ListGroup, Button } from "react-bootstrap";

const UserList = ({ users }) => (
  <>
    <h1>All Users</h1>
    <ListGroup variant="flush">
      { users.map( u => 
        <ListGroup.Item>
          {u.first} {u.last} 
          <Button>Show</Button>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList;