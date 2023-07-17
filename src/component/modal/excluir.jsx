import "../../css/buttons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import React, {useState} from "react";

export default function Excluir() {
    
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
    <div>
        <button className="gearBtn" onClick={toggleModal}>
            <b><FontAwesomeIcon icon={faTrashCan} size="2xl" style={{color: "#505050",}} />Excluir fruta</b>
        </button>

        {modal &&(
        <div className = "modal"><br/>
        <h1 className = "cad">Excluir Fruta?</h1>
        <br/>

        <p className="delete">Tem certeza que quer excluir essa fruta?<br/>Você perderá todas as informações cadastradas sobre ela!</p><br/>

        <button className = "cancelar" onClick={toggleModal}><b>Cancelar</b></button>
        <Link to = "/lista/excluido"><button className = "excluir" onClick={toggleModal}><b>Excluir</b></button></Link><br/><br/>


        </div>
    )}
    </div>
    );
}
