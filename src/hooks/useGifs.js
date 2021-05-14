import { useEffect, useState } from 'react'
import getGifs from '../getGifs'


function useGifs( {keyword} ) {

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

  return {loading, gifs}
}

export default useGifs;