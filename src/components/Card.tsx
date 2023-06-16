import React from "react"
import "./css/Card.css"
import { ICard } from "./extensions/interfaces"
import Highlighter from "react-highlight-words"

interface Props {
  card?: ICard
  loading: string
}

export default function Card({ card, loading }: Props) {
  if (loading !== "" && loading !== "loading")
    return <div className="warning">{loading}</div>

  if (!card) return <div className="warning">Start searching</div>

  return (
    <div className="card">
      <div>
        <h2 style={{ margin: "0px" }}>{card?.initial_form}</h2>
        <p className="title">{card?.pronunciation}</p>
      </div>

      <div className="box">
        <p className="title">FORMS</p>
        {card?.forms?.map((item, i) => (
          <span key={i}>{(i ? ", " : "") + item}</span>
        ))}
      </div>

      <div className="box">
        <p className="title">SYNONYMS</p>
        {card?.synonyms?.map((item, i) => (
          <span key={i}>{(i ? ", " : "") + item}</span>
        ))}
      </div>

      <div className="box">
        <p className="title">EXAMPLES</p>
        {card?.usage_examples?.map((item, i) => (
          <div key={i}>
            {`${i + 1}. `}
            <Highlighter
              highlightClassName="highlight"
              searchWords={[...card?.forms, card?.initial_form]}
              autoEscape={true}
              textToHighlight={item.example}
            />
            {`(${item.part_of_speech})`}
          </div>
        ))}
      </div>

      <div className="box">
        <p className="title">PHRASES</p>
        {card?.common_phrases?.map((item, i) => (
          <div key={i}>
            {`${i + 1}. `}
            <Highlighter
              highlightClassName="highlight"
              searchWords={[...card?.forms, card?.initial_form]}
              autoEscape={true}
              textToHighlight={item.phrase}
            />
            {" ("}
            <Highlighter
              highlightClassName="highlight"
              searchWords={[...card?.forms, card?.initial_form]}
              autoEscape={true}
              textToHighlight={item.meaning}
            />
            {")"}
          </div>
        ))}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
