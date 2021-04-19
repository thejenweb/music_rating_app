import React, {useState} from 'react'
import SongRow from './components/SongRow';
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
    />
  );
  return (
    <div>
      <ul>{songsList}</ul>
    </div>
  )
}

export default Container
