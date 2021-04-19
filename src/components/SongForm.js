import React, {useState} from "react";

function SongForm(props) {
  const [songTitle, setTitle] = useState("");
  const [songArtist, setArtist] = useState("");
  

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addSong(songTitle, songArtist);
    setTitle("");
    setArtist("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
        <input
          size="30"
          type='text'
          id="title"
          name='title' 
          value={songTitle}
          onChange={handleTitleChange}/>
        <label htmlFor="artist">Artist</label>
        <input
          size="30"
          type='text'
          id="artist"
          name='artist'
          value={songArtist}
          onChange={handleArtistChange}
           />
        <input type="submit" hidden value=""></input>
    </form>
  )
}

export default SongForm;