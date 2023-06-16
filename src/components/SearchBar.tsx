import React from "react"
import "./css/SearchBar.css"

interface Props {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({ input, setInput }: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  return (
    <input
      value={input}
      className={"searchBar"}
      type="text"
      placeholder="Search"
      onChange={(e) => onChange(e)}
    />
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
