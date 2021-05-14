import React, {useEffect, useState} from 'react';
import Gif from './Gif'
import getGifs from '../getGifs';

export default function ListOfGifs( {params} ) {

  const {keyword} = params;

  const [gifs ,setGifs] = useState([])
  /* es lo mismo que esto
  const state = useState([]);
  const value= state[0];
  const updateValue = state[0]
  */

  useEffect(function() {
    getGifs({ keyword }) //La keyword es la dependencia del efecto
    .then(gifs => setGifs(gifs))
  }, [ keyword ]);



  return <div> 
     {
        gifs.map( singleGif =>
          <Gif
              key= {singleGif.id}
              title={singleGif.title}
              url={singleGif.url}
              id={singleGif.id}
          />
          /* gifs.map( {id, title, url} =>
          <Gif
          key= {id}
          title={title}
          url={url}
          id={id}
          />*/
        )
      }
  </div>
}