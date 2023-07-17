import '../css/page.css';
import '../css/buttons.css';
import '../css/text.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div className = "intro">
        <br/>
            <h1 className = "home">Bem vindo!<br/>Cadastre uma fruta.</h1>
            <Link className='botao' to = "cadastro"> <button className = "cadastro" type = "subimit">
                <FontAwesomeIcon icon={faPlus} size="xl" style={{color: "#ffffff",}} /> Cadastrar primeira fruta</button></Link>
            <br/><br/>
        </div>
    )
}

export default HomePage;