import React from 'react';
import MessageContext from './Context';

const Child = (props) => {
  return (
    <MessageContext.Consumer>
    {function(dog) {
      return (<div>I'm the Child with a secret message: {dog}</div>)
    }}
  </MessageContext.Consumer>
  )
}

export default Child;