import { ListGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const UserList = ({ users }) => (
  <>
    <h1>All Users</h1>
    <ListGroup variant="flush">
      { users.map( u => 
        <ListGroup.Item>
          {u.first} {u.last} 
          <Link to={`/users/${u.id}`}>
            <Button>Show</Button>
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList;