import React from 'react';
export default function BoilingVerdict({celcius = 0}) {
  if(celcius >= 100){
    return <p>The water will boil.</p>
  }
  return <p>The water wil not boil.</p>
}