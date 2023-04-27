import * as React from "react"
import { useState } from "react"
import * as style from "./faq.module.css"

const Button = ({ expand }) => {
  if (expand) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10H19" stroke="#219EBC" stroke-width="2" stroke-linecap="round"/>
        <path d="M10 19L10 1" stroke="#219EBC" stroke-width="2" stroke-linecap="round"/>
      </svg>
    )
  }
  return (
    <svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.69171H19" stroke="#219EBC" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

const FaqBox = ({ question, answer }) => {
  const [expand, setExpand] = useState(true);
  
  return (
    <div>
      <div class={style.wrapper} data-expand={expand}>
        {!expand && <div class={style.left_bar}></div>}
        <div class={style.question_wrapper}>
          <div class={style.question}>{question}</div>
          <div class={style.btn} onClick={() => setExpand(!expand)}>
            <Button expand={expand}></Button>
          </div>
        </div>
        {!expand && <div class={style.answer}>{answer}</div>}
        
      </div>
    </div>
  )
}

const Faq = () => {
  const faq = [
    ['Question', 'Answer'],
    ['Question', 'Answer'],
    ['Question', 'Answer'],
  ]
  return (
    <section className={style.container}>
      <h2 class={style.header}>Frequently Asked Questions</h2>
      <div class={style.q_and_a}>
      {
        faq.map(([question, answer]) => (
          <FaqBox question={question} answer={answer}></FaqBox>
        ))
      }
      </div>
    </section>
  )
}

export default Faq;