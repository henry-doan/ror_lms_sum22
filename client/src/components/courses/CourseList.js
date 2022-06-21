import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => (
  <>
    <h1>All Courses</h1>
    <Container>
      <Row md={4} xs={12}>
        { courses.map( c => 
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Title>{c.title}</Card.Title>
                <Card.Link>
                  <Link to={`/courses/${c.id}`}>
                    Show
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>  
        )}
      </Row>
    </Container>
  </>
)

export default CourseList;