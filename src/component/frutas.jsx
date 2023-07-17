import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import Engrenagem from "../component/modal/engrenagem"

function Fruta() {
return(
    <div>
        <div className = "itens">
            <h1 className = "lista">Abacate</h1>
            <h3 className = "lista"><FontAwesomeIcon icon={faMoneyBills} size="2xl" style={{color: "#6cb247",}}/> R$12,99</h3>
            <p className = "lista"> 15 unidades em estoque</p>
            <Engrenagem/>
        </div>
    </div>
    );
};

export default Fruta;