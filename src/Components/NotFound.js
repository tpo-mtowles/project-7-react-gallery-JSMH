import React from 'react';

// Creates no results message for searches that return no results 

export default class NotFound extends React.Component {
 render() {
   return ( 
    <div className="not-found">
      <h3>did not return any results! </h3>
      <h3>Please try again.</h3>
    </div>
  )
 }
};