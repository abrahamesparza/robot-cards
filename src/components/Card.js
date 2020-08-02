import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-moon-gray dib br3 pa3 ma2 grow">
      <img alt="robots" src='https://robohash.org/test?200x200' />
      <div>
        <h2 className='tc'>{props.name}</h2>
        <p className='tc'>{props.age}</p>
      </div>
    </div>
  )
};

export default Card;