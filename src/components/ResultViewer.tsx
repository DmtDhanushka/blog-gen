import React from 'react'
import { ResponseText } from '../types'

type Props = {
    generatedText: ResponseText
}

const ResultViewer = (props: Props) => {
    const { title, paragraphs } = props.generatedText;
    return (
        <>
            <h4>{title}</h4>
            {paragraphs.map((item, index) => (<p key={index}>{item}</p>))}
        </>
    )
}

export default ResultViewer