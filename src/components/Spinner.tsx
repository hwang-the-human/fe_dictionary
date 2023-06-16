import React from "react"
import "./css/Spinner.css"

interface Props {}

export default function Spinner({}: Props) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner" />
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
