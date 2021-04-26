import "./App.css";
import { useState, useLayoutEffect } from 'react'
import Form from "./components/Form"


function App() {

  const [contributorMode, setContributorMode] = useState(false)

  const [quote, setQuote] = useState(null)

  const fetchRandomQuote = () => {
    fetch('https://positive-quotebox.herokuapp.com/api/quotes/', {
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
      <div className="col">

      </div>
      <div className="App">
        <h1 className="title">La boîte à citations positives</h1>
        {!contributorMode ?
          <>
            <div className="wrapper">
              <div className="cube">
                <b className="front"></b>
                <b className="back"></b>
                <b className="top"></b>
                <b className="bottom"></b>
                <b className="left"></b>
                <b className="right"></b>
                <i className="front">
                  <p className="quote">{quote && quote.text}</p>
                  <p className="quote-author">{quote && quote.author}</p>
                  <p className="quote-contributor">proposé(e) par {quote && quote.contributor}</p></i>
                <i className="back"></i>
                <i className="top"></i>
                <i className="bottom"></i>
                <i className="left"></i>
                <i className="right"></i>
              </div>
            </div>
            <div className="col">
              <button onClick={fetchRandomQuote} className="btn btn-primary btn-quote">Push</button>
            </div>
            <button onClick={() => setContributorMode(true)} className="btn btn-primary btn-design">Proposer une citation</button> </> : null}

        {contributorMode ?
          <div>
            <Form />
            <button onClick={() => setContributorMode(false)} className="btn btn-primary btn-design">Retour</button>
          </div >
          :
          null}
      </div>



    </>
  );
}

export default App;
