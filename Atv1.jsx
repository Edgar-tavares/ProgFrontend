App.jsx:

import React from "react";
import {useState} from "react"

// Import the Home page component
import Jogador from "./pages/jogador.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  const [canPlay, setCanPlay] = useState(true);
  
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      
    <h1 className="title">Joguinho de Dado</h1>
    <div style={{display: "flex", width: "100%", justifyContent: "space-around" }}>
       <Jogador setCanPlay={setCanPlay} canPlay={canPlay} yourTurn={false} />
       <Jogador setCanPlay={setCanPlay} canPlay={canPlay} yourTurn={true}/>
    </div>
    </div>
  );
}


Jogador.jsx:
import React, { useState } from "react";
import { Dado } from '../components/dado';

export default function Jogador(props) {
  const [dado, setDado] = useState();
  
  const handleClickJogar = () => {
    
    if(props.canPlay == props.yourTurn){
      
      const valor = Math.floor(Math.random() * 6) + 1;
    setDado(valor);
      props.setCanPlay(!props.yourTurn);
    }
  }
  
  return (
    <div>
      <Dado valor={dado} />
      <button disabled={props.canPlay !== props.yourTurn} onClick={handleClickJogar}>Girar o Dado</button>
    </div>
  );
}
