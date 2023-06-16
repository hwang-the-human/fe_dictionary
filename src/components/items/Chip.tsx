import React from "react"
import "../css/Chip.css"

interface Props {
  label: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (word?: string) => void
  setSelected: React.Dispatch<React.SetStateAction<string>>
  selected: string
}

export default function Chip({
  label,
  selected,
  setInput,
  handleSearch,
  setSelected,
}: Props) {
  function handleSelectChip() {
    setInput(label)
    handleSearch(label)
    setSelected(label)
  }
  return (
    <div
      className={"chip"}
      style={{
        backgroundColor: selected === label ? "#f1287d" : "",
        color: selected === label ? "white" : "",
      }}
      onClick={handleSelectChip}
    >
      {label}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
