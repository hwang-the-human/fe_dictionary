import React from "react"
import "./css/SearchBar.css"

interface Props {
  lang: string
  setLang: React.Dispatch<React.SetStateAction<string>>
}

export default function Selector({ lang, setLang }: Props) {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLang(e.target.value)
  }
  return (
    <select className="searchBar" value={lang} onChange={(e) => onChange(e)}>
      <option value="English">English</option>
      <option value="Russian">Russian</option>
    </select>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
