import React from 'react';
import { useFetchMyIP } from './hooks/useFetchMyIP';

export const App = () => {

  const { ip, loading } = useFetchMyIP();

  console.log("DATA : ", ip);
  console.log("LOADING : ", loading);

  return (
    <div>
      HOLA, mi direccion IP es : <span>{ip}</span>
    </div>
  )
}