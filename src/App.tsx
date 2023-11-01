import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import GenWrapper from './components/GenWrapper';

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
        <GenWrapper />
      </Container>
    </>
  )
}

export default App
