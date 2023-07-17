import "../../css/buttons.css";
import "../../css/page.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPen } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";
import Excluir from "./excluir";

export default function Engrenagem() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
    <div>
        <button className="gear" onClick={toggleModal}>
            <FontAwesomeIcon icon={faGear} size="2xl" style={{color: "#DA0D1E",}} />
            </button><br/><br/>
        
        {modal &&(
        <div className = "modal"><br/><br/>
        <Link to = "/lista/edição">
            <button className="gearBtn" onClick={toggleModal}>
                <b><FontAwesomeIcon icon={faPen} size="2xl" style={{color: "#505050",}}/> Editar fruta</b>
                </button></Link><br/><br/>
        <Excluir onClick = {toggleModal}/>
        </div>
    )}
    </div>
    );
}