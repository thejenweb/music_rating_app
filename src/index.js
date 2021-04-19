import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import SONGS from './data/songs.json';

ReactDOM.render(
  <React.StrictMode>
    <Container songData={SONGS}/>
  </React.StrictMode>,
  document.getElementById('root')
)
