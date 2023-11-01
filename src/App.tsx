import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import NavBar from './components/NavBar';
import GenForm from './components/GenForm';
import ResultViewer from './components/ResultViewer';

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <Row className='mt-4 mb-5'>
          <Col>
            <h3>Welcome to Blog Generator 1.0</h3>
          </Col>
        </Row>
        <Row>

          <Col>
            <GenForm />
          </Col>

          <Col>
            <ResultViewer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
