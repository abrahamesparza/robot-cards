import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="bg-moon-gray dib br3 pa3 ma2 grow">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2 className='tc'>{name}</h2>
        <p className='tc'>{email}</p>
      </div>
    </div>
  )
};

export default Card;