import "./css/WordsList.css"
import React, { useState } from "react"
import Chip from "./items/Chip"
import { ICard } from "./extensions/interfaces"

interface Props {
  cards: ICard[]
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (word?: string) => void
}

export default function WordsList({ cards, setInput, handleSearch }: Props) {
  const [selected, setSelected] = useState<string>("")
  return (
    <div className="wordsList">
      {cards.map((item, i) => (
        <Chip
          label={item.initial_form}
          setInput={setInput}
          handleSearch={handleSearch}
          selected={selected}
          setSelected={setSelected}
          key={i}
        />
      ))}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
