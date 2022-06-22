import { ListGroup } from 'react-bootstrap';
import Enrollment from './Enrollment';

const EnrollmentList = ({ enrollments, enrolledUsers }) => (
  <>
    <ListGroup variant="flush">
      { enrollments.map( e => 
        <Enrollment 
          key={e.id}
          {...e}
          enrolledUsers={enrolledUsers}
        />
      )}
    </ListGroup>
  </>
)

export default EnrollmentList;