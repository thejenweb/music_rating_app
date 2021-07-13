import React, {useState} from "react";
import StarRating from "./StarRating";

function SongForm(props) {
  const [songTitle, setTitle] = useState("");
  const [songArtist, setArtist] = useState("");
  const [songRating, setRating] = useState(0);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

 
  function handleSubmit(e) {
    e.preventDefault();
    props.addSong(songTitle, songArtist, songRating);
    setTitle("");
    setArtist("");
    setRating(0)
  }


  function addRating(rating) {
    setRating(rating);
    
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
        <label htmlFor="rating">Rate and Submit: </label>
        <button id="rating" name='rating'><StarRating addRating={addRating}/></button>
        {/* <input type="submit" hidden value="" /> */}
     
    </form>
  )
}

export default SongForm;

