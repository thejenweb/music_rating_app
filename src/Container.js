import React, {useState} from 'react'
import SongRow from './components/SongRow';
import SongForm from './components/SongForm';
import './Container.css'

function Container(props) {
  const [songs, setSongs] = useState(props.songData.songs);

  const songsList = songs.map((song) => 
    <SongRow
      id={song.id} 
      title={song.title}
      artist={song.artist}
      rating={song.rating}
      key={song.id}
      deleteSong={deleteSong} 
    />
  );

  function addSong(title, artist, rating) {
    const newSong = {id: songs.length+1, title: title, artist: artist}
    setSongs([...songs, newSong]);
  }  

  function deleteSong(id) {
    const remainingSongs = songs.filter((song) => song.id !== id);
    setSongs(remainingSongs);
  }

  return (
    <div className='songTable'>
      <header>
          <div>Song/Artist</div>
          <div>Rating</div>
          <div>Remove</div>
      </header>
      <ul className='songRow'>{songsList}</ul>
      <div className='songForm'>
        <SongForm 
          addSong={addSong}/>
      </div>
    </div>
    
  )
}

export default Container
