import React from 'react';
import MessageContext from './Context';

const Child = (props) => {
  return (
    <MessageContext.Consumer>
    {function(value) {
      return (<div>I'm the Child with a secret message: {value}</div>)
    }}
  </MessageContext.Consumer>
  )
}

export default Child;