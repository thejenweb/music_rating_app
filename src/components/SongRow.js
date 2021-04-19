import React from 'react';
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
        <button type="button">
          {playButton}
        </button>
      </div>
      
      <div id="song_artist">
        {title}<br></br> <i>by</i> {artist}
      </div>
      
      <div id="rating">
        {rating}
      </div>
      
      <div id="removeButton">
        <button type="button">
          {removeButton}
        </button>
      </div>
      
    </li>
  );
}


export default SongRow; 