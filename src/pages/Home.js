import React, { useState } from 'react';
import { Link, useLocation } from 'wouter'
import './Home.css';

const GIFS = ['futbol', 'programming', 'autos', 'perros'];

function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation();

    const handleSubmit = evento => {
        evento.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleInput = evn => {
        setKeyword(evn.target.value)
    }

  return (
    <div>
      <form onSubmit= {handleSubmit}>
          <label> Ingresa tu busqueda de gifs </label>
          <input onChange={handleInput} type='text' value={keyword} />
          <button className='buscador'>Buscar</button>
      </form>
      <ul>
          {GIFS.map((GIF) => (
              <li key={GIF}>
                  <Link to={`/search/${GIF}`} >Gifs de {GIF}</Link>
              </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;

