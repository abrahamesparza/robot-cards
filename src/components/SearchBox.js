import React from 'react';

const SearchBox = ({query, searchChange}) => {
  return (
    <div>
      <input
      className='pa3 ba b--silver bg-washed-blue'
      type='search'
      placeholder='search robot'
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;