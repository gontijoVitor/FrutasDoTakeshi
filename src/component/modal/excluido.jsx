import "../../css/buttons.css";
import "../../css/page.css";

import phone from"./../../assets/phone.png";
import { Link } from 'react-router-dom';

export default function Excluido() {
    return(
    <div>
        <div className = "modal"><br/>
        <h1>Fruta Excluida!</h1>
        <br/>
        
        <img src = {phone} width = "219px" height = "270px" alt = "fotoCelular"/>

        <p>Você excluiu a fruta da sua lista com sucesso!</p>

        <Link to = "/lista"><button className = "cadastro"><b>Voltar para a lista</b></button></Link>
        </div>
    </div>
    );
}
