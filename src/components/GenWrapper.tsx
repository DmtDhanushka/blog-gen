import { useState } from 'react'
import { Prompt, ResponseText } from '../types'
import { Row, Col } from 'react-bootstrap'
import GenForm from './GenForm'
import ResultViewer from './ResultViewer'
import { OpenAIClient, AzureKeyCredential } from '@azure/openai'

type Props = {}

const GenWrapper = (props: Props) => {
  const defaultPrompt: Prompt = {
    content: "Northlights, Sweeden, Hiking",
    language: "English",
    numOfParas: 3,
  }

  const [prompt, setPrompt] = useState<Prompt>(defaultPrompt)
  const [resultText, setResultText] = useState<ResponseText>({ title: '', paragraphs: [''] })

  const handlePrompt = (prompt: Prompt) => {
    console.log(prompt)
    setPrompt(prompt)
    generateText();
  }


  const endpoint = import.meta.env.VITE_ENDPOINT;
  const azureApiKey = import.meta.env.VITE_AZURE_API_KEY;

  const messages = [
    { role: "system", content: "You are a blog writer, You should write paragraphs based on the facts given by user. User 3rd person view. Use attractive words and a style" },
    { role: "user", content: "I need you to write down 3 paragraphs and one title. Don't number the pargraphs.Return results in JSON format like this: { title: 'string', paragraphs: ['string'] }    " },
    { role: "assistant", content: "Sure I can write a nice description for you." },
    { role: "user", content: "Nothernlights, Arthotel Tornedalen (Torne valley Sweden), from 440 Euro" },
  ];

  const generateText = async () => {
    try {
      console.log("== Chat Completions Sample ==");

      const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
      const deploymentId = "generative-model2223";
      const result = await client.getChatCompletions(deploymentId, messages);

      const content = result.choices[0].message?.content;
      if (content) {
        const responseObj: ResponseText = JSON.parse(content.replace(/\r?\n|\r/g, ''));
        setResultText(responseObj);
        console.log(responseObj)
      } else {
        console.error('content undfined')
      }

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <Row>

      <Col xs={4}>
        <GenForm handlePrompt={handlePrompt} />
      </Col>

      <Col>
        <ResultViewer generatedText={resultText} />
      </Col>
    </Row>
  )
}

export default GenWrapper