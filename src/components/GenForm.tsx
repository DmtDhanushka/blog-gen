import { AzureKeyCredential, OpenAIClient } from '@azure/openai'
import { useEffect, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { Language, ResponseText } from '../types'

type Props = { handleResult: (result: ResponseText) => void }


const GenForm = (props: Props) => {



  const languageList: Language[] = ["English", "Spanish", "French", "Swedish"];

  const [content, setContent] = useState("Sweeden, Hiking, Snow sports, 400$, Kids activities, honeymoon");
  const [language, setLanguage] = useState<Language>("English")
  const [numOfParas, setNumOfParas] = useState<number>(3)
  const [loading, setLoading] = useState<boolean>(false);

  const endpoint = import.meta.env.VITE_ENDPOINT;
  const azureApiKey = import.meta.env.VITE_AZURE_API_KEY;

  const messages = [
    { role: "system", content: `You are a blog writer, You should write paragraphs based on the facts given by user. User 3rd person view. Use attractive words and a style` },
    { role: "user", content: `I need you to write down ${numOfParas} paragraphs and one title in ${language}. Don't number the pargraphs. Return results in JSON format like this: { title: 'string', paragraphs: ['string'] }` },
    { role: "assistant", content: "Sure I can write a nice description for you." },
    { role: "user", content: content },
  ];

  const generateText = async () => {
    setLoading(true)
    try {
      console.log("== Chat Completions Sample ==", messages);

      const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
      const deploymentId = "generative-model2223";
      const result = await client.getChatCompletions(deploymentId, messages);

      const content = result.choices[0].message?.content;
      if (content) {
        const responseObj: ResponseText = JSON.parse(content.replace(/\r?\n|\r/g, ''));
        console.log(responseObj)
        props.handleResult(responseObj)
      } else {
        console.error('content undfined')
      }

      setLoading(false)

    } catch (error) {
      console.error(error)
      setLoading(false)
    }

  }

  const handleSubmit = () => {
    generateText();
  }

  useEffect(() => {
    generateText();
  }, [])


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

      {loading ? (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>) : (
        <Button variant="primary" type='button' onClick={handleSubmit}>
          Generate
        </Button>)}
    </Form>
  )
}

export default GenForm