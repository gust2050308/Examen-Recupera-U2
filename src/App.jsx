import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [datos, setdatos] = useState(null)

  const start = useEffect(() => {
    data()
  },[count])

  function data(){
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`)
    .then((res) =>{
      console.log(res)
      setdatos(res.data.results)
    })
  }

  return (
    <>
      <ul>
        { datos ? datos.map((pokemon, index) => ( <li key={index}>
          {pokemon.name}
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count + index + 1}.png`} alt="" />
        </li>  )):<li>Cargando datos...</li>
        
      }
      </ul>

      {
        (count > 0) && <button onClick={() => {setCount(count -10)}}>Atrás</button>
      }

        <button onClick={() => {setCount(count + 10 )}}>adelante</button>

    </>
  )
}

export default App
