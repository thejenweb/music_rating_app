import React, { useState, useMemo } from 'react';
import { ReactComponent as Star} from "./../assets/star.svg";

function StarSVG(props) {
  const { fill = '#000'} = props;
  return (
    <Star fill={fill}/>
  )
}

function Rating(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "#ca8500";
    } else if (!hoverRating && rating >= index) {
      return "#ca8500";
    }
    return "#000";
  }, [rating, hoverRating, index]);
  return (
    <div 
      onMouseEnter={() => onMouseEnter(index)} 
      onMouseLeave={() => onMouseLeave()} 
      onClick={() => onSaveRating(index)}>
      <StarSVG fill={fill} />
    </div>
  )
}


function StarRating(props) {
  const [rating, setRating] = useState(props.rating);
  const [hoverRating, setHoverRating] = useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    props.addRating(index);
    setRating(0);
  }; 




  
  return(
  <div className="starRating">
      {[1,2,3,4,5].map((index) => {
        return (
          <Rating index={index}
                  key={index} 
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter} 
                  onMouseLeave={onMouseLeave} 
                  onSaveRating={onSaveRating}
                   />   
        )
      })}
    
  </div>
  );
}

export default StarRating;