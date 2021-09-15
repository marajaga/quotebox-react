import React, { useState } from 'react'

function Form() {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [contributor, setContributor] = useState('')

    const createQuote = () => {
        const quote = {
            "text": text,
            "author": author,
            "contributor": contributor
        }

        fetch('https://positive-quotebox.herokuapp.com/api/quotes/', {
            'method': 'POST',
            'body': JSON.stringify(quote),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => resp.json())
            .then(resp => alert("Merci pour votre contribution :). Notre équipe de modération va étudier votre citation dans les plus brefs délais. Belle journée"))
            .catch(error => console.log(error))
    }

    return (
        <div className="mb-3">
            <div className="form">
                <div className="form-flex">
                    <label htmlFor="text" className="form-label">Citation:</label>
                    <textarea type="textarea" className="form-control" id="text" placeholder="Entrez votre citation préférée" value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div className="form-flex">
                    <label htmlFor="author" className="form-label">Auteur:</label>
                    <input type="text" className="form-control" id="author" placeholder="Entrez l'auteur de la citation" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>
                <div className="form-flex">
                    <label htmlFor="contributor" className="form-label">Proposé par:</label>
                    <input type="text" className="form-control" id="contributor" placeholder="Entrez votre prénom / pseudo" value={contributor} onChange={e => setContributor(e.target.value)} />
                </div>
            </div>
            <button onClick={createQuote} className="btn btn-sucess btn-design">Ajouter une citation</button>

        </div>
    )
}




export default Form;