import { useState } from 'react'
import { Col } from 'react-bootstrap'
import { ResponseText } from '../types'
import GenForm from './GenForm'
import ResultViewer from './ResultViewer'

const GenWrapper = () => {

  const [resultText, setResultText] = useState<ResponseText>({ title: '', paragraphs: [''] })

  const handleResult = (result: ResponseText) => {
    setResultText(result)
  }

  return (
    <>
      <Col xs={4}>
        <GenForm handleResult={handleResult} />
      </Col>
      <Col>
        <ResultViewer generatedText={resultText} />
      </Col>
    </>
  )
}

export default GenWrapper