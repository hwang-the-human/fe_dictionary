import React from "react"
import "../css/Button.css"

interface Props {
  label: string
  onClick: () => void
}

export default function Button({ label, onClick }: Props) {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties | object } = {}
