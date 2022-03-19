import React, {useState} from 'react';
import './App.css';

import Media from './components/media'
import Intervalo from './components/intervalo';
import Soma from './components/soma';
import Sorteio from './components/sorteio';

function App() {
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)
  return (
    <div className='App'>
      <h1>Projeto-Redux</h1>

      <div className='linha'>
        <Intervalo min={min} max={max}></Intervalo>
      </div>

      <div className='linha'>
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

    </div>
  )
}

export default App;
