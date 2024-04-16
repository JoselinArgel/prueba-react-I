import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagenPrincipal from "../assets/harrypotter2.jpeg"



const Buscador = ( {personajes, setListaFiltrada, listaFiltrada}) => {

        const filtrarElementos =(valorCaja) =>{
            const nuevoArreglo = personajes.filter ((personaje) =>{
                if (personaje){
                    return personaje.personaje.toLowerCase ().includes(valorCaja)|| personaje.casaDeHogwarts.toLowerCase ().includes(valorCaja)|| personaje.interpretado_por.toLowerCase ().includes(valorCaja)
                 } else {
                    return personajes
                      }
                })
                 
                setListaFiltrada(nuevoArreglo)
        }
        const ordenarPersonajes = (tipoOrden)=> {
            let listaOrdenada = ""
            if (tipoOrden ==="az") {  
                listaOrdenada = listaFiltrada.sort((itemA, itemB) => {  
                    return itemA.personaje.localeCompare(itemB.personaje);
             } );
             setListaFiltrada([...listaOrdenada])
              } else if (tipoOrden ==="oo") {  
                setListaFiltrada ([...personajes])
                console.log(personajes)
        }
    }
    return (
        <div>
        <img src={imagenPrincipal} alt="" style= { { padding:"0", margin:"0", border:"0", width:"1350px",}    }  />
        <nav className="navBar navBar-light">
        <div className="container-fluid">
        <a className="text-white navbar-brand" style={{fontSize: '3em'}} >PERSONAJES DE HARRY POTTER</a>
        <form className="d-flex" >
         <input onChange =  {(e) => filtrarElementos (e.target.value) } className="form-control m-2" type="search" placeholder="Busca el Personaje" />
        <button className="btn btn-light" type="submit"> Buscar</button>
        </form>

    </div>
</nav>

<div>
<select defaultValue={""} onChange={(e)=> ordenarPersonajes   (e.target.value)} name="select">
    <option value=""> Selecciona una opcion</option>
    <option value="az">Ordenar A-Z</option>
    <option value="oo">Orden original</option>
    </select>
</div>
</div>
    )
     }
    export default Buscador
    