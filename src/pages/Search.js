import React, { useEffect, useState } from 'react'
import ListOfGifs from '../components/ListOfGifs'
import getGifs from '../getGifs'


function Search( {params} ) {

    const {keyword} = params
    const [loading , setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect( function () {
        setLoading(true)
        getGifs( {keyword} )
            .then( gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword]) //Se renderiza cada vez que se cambia la dependencia

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

