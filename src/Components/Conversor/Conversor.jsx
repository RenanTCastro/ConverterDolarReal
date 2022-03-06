import React, {useEffect, useState}  from "react";
import "./style.css"
import BRA from "../../Images/BRA.png"
import EUA from "../../Images/EUA.png"
import BotaoTrocar from "../../Images/Trocar.png"

function Conversor(){
    const [trocarMoeda, setTrocarMoeda] = useState(true);
    const [valorMoeda, setValorMoeda] = useState();
    const [conversao, setConversao] = useState("00.00");
    const [valorArmazenado, setValorArmazenado] = useState();

    useEffect(() => {
        getValor();
    });

    function getValor(){
        fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setValorMoeda(data.USDBRL.bid);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    function Converter(valor){
        setValorArmazenado(valor);
        if(valor.target.name === "DolarReal"){
            console.log(valor.target.value * valorMoeda);
            setConversao((valor.target.value * valorMoeda).toFixed(2));
        }else{
            console.log(valor.target.value / valorMoeda);
            setConversao((valor.target.value / valorMoeda).toFixed(2));
        }
    }

    const handleClick = () => {
        console.log(valorArmazenado);
        if(valorArmazenado!==undefined)
            Converter(valorArmazenado);
        return trocarMoeda ? setTrocarMoeda(false) : setTrocarMoeda(true);
    }

    return(
        <div className="conversor">
            <div className={trocarMoeda ? "moedasDolarReal" : "moedasRealDolar"}>
                <div className="pais">
                    <img src={EUA} alt="Bandeira dos Estados Unidos"/>
                    <p className="nomeMoeda">DÓLAR</p>
                </div>

                <button className="botao" onClick={handleClick}>
                    <img src={BotaoTrocar} alt="Botao de trocar"/>
                </button>

                <div className="pais">
                    <img src={BRA} alt="Bandeira do Brasil"/>
                    <p className="nomeMoeda">REAL</p>
                </div>
            </div>
            <div className="divInserirValor" >
                <p>{trocarMoeda? " US$      " : " R$ "} </p>
                <input 
                    className="inputInserirValor" 
                    name= {trocarMoeda ? "DolarReal" : "RealDolar"}
                    onChange={Converter}
                />
            </div>
            <input 
                className="inputs" 
                value={trocarMoeda? " R$      "+conversao : " US$ "+conversao} 
                readOnly/>
        </div>
    )
}

export default Conversor;

