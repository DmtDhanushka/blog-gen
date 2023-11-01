import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Language, Prompt } from '../types'

type Props = { handlePrompt: (prompt: Prompt) => void }


const GenForm = (props: Props) => {

  const handleSubmit = () => {
    const obj = { content, language, numOfParas };
    props.handlePrompt(obj)
  }

  const languageList: Language[] = ["English", "Spanish", "French", "Swedish"];

  const [content, setContent] = useState("Northlights, Sweeden, Hiking");
  const [language, setLanguage] = useState<Language>("English")
  const [numOfParas, setNumOfParas] = useState<number>(3)

  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Content points</Form.Label>
        <Form.Control onChange={e => setContent(e.target.value)} type="text" placeholder="Enter email" value={content} />
        <Form.Text className="text-muted">
          Keywords, facts, or anything that should include.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Language</Form.Label>
        <Form.Select onChange={e => setLanguage((e.target.value) as Language)} aria-label="Default select example">
          {languageList.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Number of paragraphs</Form.Label>
        <Form.Control type="number" placeholder="Number of paras" value={numOfParas} onChange={e => setNumOfParas(Number(e.target.value))} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default GenForm