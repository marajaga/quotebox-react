import "./App.css";
import { useState, useLayoutEffect } from 'react'
import Form from "./components/Form"


function App() {

  const [contributorMode, setContributorMode] = useState(false)

  const [quote, setQuote] = useState(null)

  const fetchRandomQuote = () => {
    fetch('http://127.0.0.1:8000/api/quotes/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(resp => setQuote(resp))
      .catch(error => console.log(error))
  }

  useLayoutEffect(() => { fetchRandomQuote() }, [])

  return (
    <>
      <div className="App">
        <div className="row">
          {!contributorMode ?
            <>
              <div className="col">
                <h1 class="title">La boîte à citations positives</h1>
                <p class="quote">{quote && quote.text}</p>
              </div>
              <div className="col">
                <button onClick={fetchRandomQuote} className="btn btn-primary btn-quote">Push</button>
              </div>
              <button onClick={() => setContributorMode(true)} className="btn btn-primary btn-design">Proposer une citation</button> </> : null}

          {contributorMode ?
            <div>
              <Form />
              <button onClick={() => setContributorMode(false)} className="btn btn-primary btn-design">Finalement non</button>
            </div >
            :
            null}
        </div>
      </div >


    </>
  );
}

export default App;
