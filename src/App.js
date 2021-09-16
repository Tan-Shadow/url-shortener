import './App.css';
import Url from './components/Url';
import { useState } from 'react';
// const axios = require('axios');


const InputForm = (props) => {

  const [input, setinput] = useState('')

  const handleInput = e => {
    setinput(e.target.value)
  }
  return (
    <form onSubmit={(e) => props.onsubmit(e, input)}>
      <input onChange={handleInput} value={input} type="url" name="url" className="input" placeholder="Enter your url..." />
      <input type="submit" value="Shorten" className="btn" />
    </form>
  )
}

const App = () => {

  const [url, setUrl] = useState('')
  let [urlCopied, seturlCopied] = useState(0)
  const [gotUrl, setgotUrl] = useState(false)

  const onsubmit = (e, input) => {
    e.preventDefault()
    setgotUrl(true)
    if (!input) {
      alert("Give an url man ;(")
      return
    }
    console.log(`submitted ;) ${input}`);

    const url = 'https://api.short.io/links/public';
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: process.env.REACT_APP_TOKEN
      },
      body: JSON.stringify({
        allowDuplicates: false,
        originalURL: input,
        domain: '1so6.short.gy',
        title: 'tanShadow <3',
      })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setUrl(json['secureShortURL'])
      })
      .catch(err => console.error('error:' + err));

  }

  return (
    <div className="App">
      <h1 style={{ color: "#4BB543", fontSize: "5rem", paddingTop: "3rem" }}>tanShadow</h1>
      <InputForm onsubmit={onsubmit} />
      {
        gotUrl && 
        (
          url ? <Url
            url={url} oncopy={() => {
              seturlCopied(true)
              navigator.clipboard.writeText(url)
              urlCopied = { urlCopied }
            }} />
          : <h2 style={{color: 'greenyellow', fontSize : '2rem', fontFamily : 'monospace'}}>Getting your url...</h2>
        )
      }

    </div>
  );
}

export default App;
