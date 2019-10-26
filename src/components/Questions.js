import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import ReactMarkdown from "react-markdown"
import { sectionHeight } from "../utils/globalStyleObjects"

function Question({ node }) {
  const {
    question,
    childContentfulQuestionAnswerTextNode: { answer },
  } = node
  return (
    <AccordionItem className="mb-4 sm:mb-8">
      <AccordionItemHeading>
        <AccordionItemButton className="bg-white accordion__button flex p-4 justify-between items-center">
          {question}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="accordion__panel bg-teal-400 p-4 text-white">
        <ReactMarkdown source={answer} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default function Questions({ questions }) {
  return (
    <div className="container mx-auto py-4">
      <h2 className="text-xl sm:text-3xl text-center font-bold mb-2">
        Вопросы и ответы
      </h2>
      <Accordion style={sectionHeight} allowMultipleExpanded allowZeroExpanded>
        {questions.map((question, idx) => (
          <Question key={idx} node={question} />
        ))}
      </Accordion>
    </div>
  )
}
