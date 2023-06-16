import { useState, useEffect } from "react"
import "./App.css"
import Card from "./components/Card"
import SearchBar from "./components/SearchBar"
import WordsList from "./components/WordsList"
import { ICard } from "./components/extensions/interfaces"
import Button from "./components/items/Button"
import axios from "axios"
import Spinner from "./components/Spinner"
import Selector from "./components/Selector"

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
}

function App() {
  const [cards, setCards] = useState<ICard[]>([])
  const [card, setCard] = useState<ICard>()
  const [input, setInput] = useState<string>("")
  const [loading, setLoading] = useState<string>("")
  const [lang, setLang] = useState<string>("English")

  async function getAllCards() {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/cards/getAll",
        config
      )
      setCards(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (loading === "") {
      getAllCards()
    }
  }, [loading])

  async function handleSearch(word?: string) {
    setCard(undefined)
    setLoading("loading")
    try {
      const res = await axios.post(
        "http://localhost:8000/api/cards/create",
        {
          new_word: capitalizeFirstLowercaseRest(word ?? input),
          lang: lang,
        },
        config
      )
      console.log("Res:", res.data)
      setLoading("")
      setCard(res.data)
    } catch (error: any) {
      console.log(error)
      setLoading(error.response.data)
      return
    }
  }

  const capitalizeFirstLowercaseRest = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <div className="searchBox">
          <SearchBar input={input} setInput={setInput} />
          <Selector lang={lang} setLang={setLang} />
          <Button label={"Go!"} onClick={() => handleSearch()} />
        </div>

        <div className="wordBox">
          <WordsList
            cards={cards}
            setInput={setInput}
            handleSearch={handleSearch}
          />
          <Card card={card} loading={loading} />
        </div>
      </div>
      {loading === "loading" && <Spinner />}
    </div>
  )
}

export default App
