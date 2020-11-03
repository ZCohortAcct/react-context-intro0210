import React from 'react'
import Parent from './Parent'

const Grandparent = () => {
  return (
    <div>
      I'm the GrandPappy 
      <Parent/>
      </div>

  );
}

export default Grandparent;