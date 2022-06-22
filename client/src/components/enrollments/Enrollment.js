import { ListGroup } from "react-bootstrap";

const Enrollment = ({ role, user_id, course_id, enrolledUsers }) => {

  const displayFullName = (id) => {
    let fullName = ''
    enrolledUsers.map( u => {
      if (u.id === id) {
        fullName = u.first + " " + u.last 
      }
    })
    return fullName
  }

  return (
    <>
      <ListGroup.Item>
        {displayFullName(user_id)}
        <button>edit</button>
        <button>delete</button>
      </ListGroup.Item>
    </>
  )
}

export default Enrollment;