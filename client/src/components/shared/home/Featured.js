import { Container, Row, Col } from 'react-bootstrap';

const Featured = () => (
  <Container>
    <Row>
      <Col>
        <h1>Featuring our Top Courses</h1>
        <Row>
          <Col>
            <p>Box icon HERE</p>
            <p>White box testing, having to test outside the box</p>
          </Col>
          <Col>
            <p>truck icon HERE</p>
            <p>Depoly and shipping a finished application</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <img
          src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='courseimg'
        />
      </Col>
    </Row>
  </Container>
)

export default Featured;