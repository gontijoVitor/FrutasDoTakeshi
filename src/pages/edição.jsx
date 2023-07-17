import '../css/page.css';
import '../css/buttons.css';
import '../css/input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faMoneyBill, faDatabase, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Edicao (){
    return(
    <div>
            <form>
                <div className = "intro"><br/>

                    <h1 className = "cad">Editar uma fruta</h1> <Link to = "/lista"><button className= "back"><FontAwesomeIcon icon={faX} size="2xs" style={{color: "#000000",}} /></button></Link><br/>
                    <table align='center'><label htmlFor = "numV1">
                        <FontAwesomeIcon icon={faAppleWhole} size = "2xl" style={{color: "#DA0D1E",}} /> </label>
                        <input className = "cad" type = "text" maxLength = "30" placeholder="Nome da fruta*" required/></table><br/><br/>

                    <table align='center'><label htmlFor = "numV2">
                        <FontAwesomeIcon icon={faMoneyBill} size = "2xl" style={{color: "#6cb247",}} /> </label>
                        <input className = "cad" type = "number" size = "50" placeholder="Preço do Kilo*" required/></table><br/> <br/>

                    <table align='center'><label htmlFor = "numV3">
                        <FontAwesomeIcon icon={faDatabase} size = "2xl" style={{color: "#2620d9",}} /> </label>
                        <input className = "cad" type = "number" size = "50" placeholder= "Quantidade no estoque*" max = "100" required/></table><br/><br/><br/>

                    
                    <Link to = "/lista"><button className = "cadastro" type = "submit">Atualizar fruta</button></Link>
                </div>
            </form>

        </div>
    );
}
export default Edicao;