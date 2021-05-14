import React from 'react';
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search'
import Detail from './pages/Detail'
import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
      <Link to={'/'} >Gifs </Link>
        <Route 
          component= {Home} 
          path='/' 
          />
          <Route 
          component= {Search} 
          path='/search/:keyword' 
          />
          <Route 
          component= {Detail} 
          path='/gif/:id' 
          />
      </section>
    </div>
  );
}

export default App;
