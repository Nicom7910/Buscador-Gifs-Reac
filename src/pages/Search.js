import React from 'react'
import ListOfGifs from '../components/ListOfGifs'
import useGifs from '../hooks/useGifs'


function Search( {params} ) {

    const { keyword } = params
    const { loading, gifs } = useGifs( {keyword} )
    console.log('--')
  return (
    <>
      {loading
        ? "Cargando"
        : <ListOfGifs gifs={gifs} />
      }
    </>
  );
}

export default Search;

