import "../../css/buttons.css";
import "../../css/page.css";

import phone from"./../../assets/phone.png";
import { Link } from 'react-router-dom';
import React, {useState} from "react";

export default function Sucesso() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
    <div>
        <button className = "cadastro" type = "submit" onClick={toggleModal}><b>Cadastrar</b></button><br/><br/>
        {modal &&(
        <div className = "modal"><br/>
        <h1>Fruta Cadastrada!</h1>
        <br/>
        
        <img src = {phone} width = "219px" height = "270px" alt = "fotoCelular"/>

        <p>Você cadastrou a fruta com sucesso!</p>

        <Link to = "/lista"><button className = "cadastro"><b>Ir para a lista</b></button></Link><br/><br/>
        </div>
    )}
    </div>
    );
}
