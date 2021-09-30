import React , {useState} from 'react'
import { useEffect } from 'react'
import { Button} from 'react-bootstrap'
import { GoQuote } from 'react-icons/go'
import './App.css'
import axios from 'axios'

const App = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    const quoteApi = async () => {
      let arrayOfQuotes = []
      try {
        const data = await axios.get('https://api.quotable.io/random')
        arrayOfQuotes = data.data
        console.log(arrayOfQuotes)
      } catch (error) {
        console.log(error)
      }

      try {
        setQuote(arrayOfQuotes.content)
        setAuthor(arrayOfQuotes.author)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      quoteApi()
    }, [])

    return (
      <div className="App">
        <section className="Main" id="quote-box">
          <div className="main-content pb-5 mt-5 rounded container-sm">
            <div className="row justify-content-center text-center">
              <div className="col-6 mb-3 mt-5" id="text"><h3><GoQuote size="30px"/> {quote}</h3></div>
            </div>
            <div className="row">
              <div className="col mb-2 author" id="author"><h5>- {author}</h5></div>
            </div>
            <div classname="row justify-content-evenly">
            <div className="col-4"><a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" value={quote}>Twitter</a></div>
              <div className="col-4 button-new" id="new-quote"><Button className="bg-success" onClick={quoteApi}>NEW QUOTES</Button> </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3"><h5>By -Maxdha</h5></div>
        </section>
        
      </div>
    )
}

export default App;