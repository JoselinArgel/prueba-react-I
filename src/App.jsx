import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import MiApi from './components/MiApi'
import Buscador from './components/Buscador';


function App() {
  const [personajes, setPersonajes] = useState ([])
  const [listaFiltrada, setListaFiltrada]= useState ([])
  
  return (

    <div className='App' >
      <Buscador personajes={personajes} setListaFiltrada={setListaFiltrada}listaFiltrada={listaFiltrada} />
      <MiApi personajes ={personajes} setPersonajes={setPersonajes} listaFiltrada={listaFiltrada} setListaFiltrada={setListaFiltrada}/>
      
    </div>
  )
}
 


export default App
