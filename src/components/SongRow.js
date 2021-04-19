import React from 'react';
import StarRating from "./StarRating";
import trashSVG from "./../assets/trash.svg";
import playSVG from "./../assets/play.svg";



function SongRow(props) {
  const indice = props.id;
  const playButton = <img src={playSVG} alt="Remove button" />
  const title = props.title;
  const artist = props.artist;
  const rating = props.rating;
  const removeButton = <img src={trashSVG} alt="Delete button" />


  return(
    <li>
      <div id="index">
        {indice}
      </div>
      
      <div id="playButton">
        <button type="button" onClick={() => props.playSong(props.title, props.artist)}>
          {playButton}
        </button>
      </div>
      
      <div id="songArtist">
        {title}<br></br> <i>by</i> {artist}
      </div>
      
      <div id="rating">
        <StarRating rating={rating}/> 
      </div>
      
      <div id="removeButton">
        <button type="button" onClick={() => props.deleteSong(props.id)}>
          {removeButton}
        </button>
      </div>
      
    </li>
  );
}


export default SongRow; 