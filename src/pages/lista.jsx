import './../css/page.css'
import './../css/buttons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import React from 'react';
import Fruta from "./../component/frutas"

function Lista() {

return(
    <div className = "lista"><br/>
        <table align='center'>
        <FontAwesomeIcon className='search' icon={faMagnifyingGlass} size = "xl" style={{color: "#000000",}} />
        <input className = "lista" type = "text" placeholder='Pesquisar Fruta'/>
        </table><br/><br/><br/><br/><br/><br/>
        <Link to = "/cadastro"><button className = "plus"><FontAwesomeIcon className='search' icon={faPlus} size = "xl" style={{color: "#FFFFFF",}} /></button></Link>

        <Fruta/>
    </div>
)
}

export default Lista;