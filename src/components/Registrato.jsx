import { useNavigate } from "react-router-dom"
import React from "react";
import '../style/Registrato.css'

const Registrato = () => {

    const navigate = useNavigate();


    return(
        <div className="registrato">
        <p>Hai compiuto il primo passo! <br /> 
        Fai il login per accedere al tuo profilo.
        </p>
        <button className="regsbutton" onClick={() => navigate('/log')}>Login</button>
        </div>
    )
}

export default Registrato;