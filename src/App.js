import React , {useState} from 'react'
import { useEffect } from 'react'

import {BsInstagram, BsTwitter} from 'react-icons/bs'

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
      <div className='text-white'>
        <div className=' sm:container sm:mx-auto md:container md:mx-auto bg-green-800 mt-40 rounded-xl'>
          <div className="grid grid-cols-4 gap-4 place-items-center">
            <div className="col-start-1 col-end-5 sm:text-lg md:text-xl xl:text-2xl mt-10 mr-10 ml-10 mb-3" id="text"><h3>{quote}</h3></div>
            <div className="col-start-1 col-end-5 xl:text-xl sm:text-sm mb-5 italic" id="author"><h5>~ {author}</h5></div>
            <div className="col-start-1 col-end-2 mb-10">
              <div className="flex hover:text-blue-400 ">
                <BsTwitter className='mt-1 mr-2'/>
                <a href={`https://twitter.com/intent/tweet?text=${quote}`} target="_blank" id="tweet-quote" value={quote} rel="noreferrer">Twitter</a>
              </div>
            </div>
            <div className="col-start-2 col-end-3 mb-10">
              <div className="flex hover:text-purple-400 ">
                <BsInstagram className='mt-1 mr-2'/>
                <a href="/" target="_blank" id="tweet-quote" value={quote}> Instagram</a>
              </div>
            </div>
            <button type="button" class="col-start-3 col-end-5 text-white bg-green-700  font-medium rounded-lg text-sm p-3 pl-10 pr-10 mb-8 hover:text-black hover:bg-green-500" onClick={quoteApi}>Refresh Quote</button>
          </div>
        </div>
      </div>
    )
}

export default App;