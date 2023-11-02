import { Col, Container, Row } from 'react-bootstrap';
import GenWrapper from './components/GenWrapper';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />

      <Container>
        <Row className='mt-4 mb-5'>
          <Col>
            <h3>Welcome to Blog Generator</h3>
          </Col>
        </Row>
        <Row>
          <GenWrapper />
        </Row>
        <Row>
          <Col className='mt-5'>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
