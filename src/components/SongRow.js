import React from 'react';



function SongRow(props) {
  const indice = props.id;
  const title = props.title;
  const artist = props.artist;
  const rating = props.rating;


  return(
    <li>
      <div>
        {indice}
      </div>
      
      
      <div>
        {title}<br></br> by {artist}
      </div>
      
      <div>
        {rating}
      </div>
      
    </li>
  );
}


export default SongRow; 