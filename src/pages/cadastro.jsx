import '../css/page.css';
import '../css/buttons.css';
import '../css/input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faMoneyBill, faDatabase, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Link } from "react-router-dom";
import Sucesso from "../component/modal/sucesso";

    const Cadastro = ({addFruta}) =>{
        const[fruta, setFruta] = useState ("");
        const[value, setValue] = useState ("");
        const[quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fruta || !value || !quantity) return;
        addFruta(fruta, value, quantity);
        setFruta("");
        setValue("");
        setQuantity("");
        }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div className = "intro"><br/>

                <h1 className = "cad">Cadastrar uma fruta</h1> <Link to = "/lista"><button className= "back"><FontAwesomeIcon icon={faX} size="2xs" style={{color: "#000000",}} /></button></Link>
                <table align='center'><label htmlFor = "numV1">
                <FontAwesomeIcon icon={faAppleWhole} size = "2xl" style={{color: "#DA0D1E",}} /> </label>
                <input className = "cad" type = "text" value = {fruta} onChange = {(e) => setFruta(e.target.value)} maxLength = "30" placeholder="Nome da fruta*" required/></table> <br/><br/>

                <table align='center'><label htmlFor = "numV2">
                    <FontAwesomeIcon icon={faMoneyBill} size = "2xl" style={{color: "#6cb247",}} /> </label>
                    <input className = "cad" type = "number" value = {value} onChange = {(e) => setValue(e.target.value)} size = "50" placeholder="Preço do Kilo*" required/></table> <br/><br/>

                <table align='center'><label htmlFor = "numV3">
                    <FontAwesomeIcon icon={faDatabase} size = "2xl" style={{color: "#2620d9",}} /> </label>
                    <input className = "cad" type = "number" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} size = "50" placeholder= "Quantidade no estoque*" max = "100" required/></table> <br/><br/>

                <Sucesso/>
            
                </div>
            </form>

        </div>
    );
}

export default Cadastro;