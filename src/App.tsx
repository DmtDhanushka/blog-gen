import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import GenForm from './components/GenForm';
import ResultViewer from './components/ResultViewer';
import { useState } from 'react';
import { Prompt } from './types';

function App() {

  const defaultPrompt: Prompt = {
    content: "Northlights, Sweeden, Hiking",
    language: "English",
    numOfParas: 3,
  }

  const [prompt, setPrompt] = useState<Prompt>(defaultPrompt)

  const handlePrompt = (prompt: Prompt) => {
    console.log(prompt)
    setPrompt(prompt)
  }

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
            <GenForm handlePrompt={handlePrompt} />
          </Col>

          <Col>
            <ResultViewer />
            <p>{JSON.stringify(prompt)}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
