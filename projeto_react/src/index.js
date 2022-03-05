import React from "react";
import ReactDOM from "react-dom";
import Familia from "./componente/Familia";
import FamiliaBonacini from "./componente/FamiliaBonacini";
// import Componente1 from "./componentes/Componente1";
// import { CompA, CompB as B } from "./componentes/DoisComponentes";
// import { Teste1, Teste2, Teste3 } from "./componentes/MultiElementos";
import Nome from "./componente/Nome";



const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/> */}
        {/* <CompA valor="Primeiro componente"/>
        <B valor="Segundo componente"/> */}
        {/* <MultiElementos/> */}
        {/*<FamiliaBonacini />&rbrace;}*/}
       <Familia sobrenome = "Bonacini" endereço = "Rua Emilio Bruxelas" numero = "4245" cidade = "Franca" estado = "SP">
            <Nome nome = "José" />
            {/* <Nome nome="Kallel" sobrenome="Bonacini" />
            <Nome nome="Tyler" sobrenome="Bonacini" /> */}
        </Familia>
        {/* <Familia>
            <Nome nome="Juliano" sobrenome="Bonacini" />
            <Nome nome="Fabiana" sobrenome="Bonacini" />
            <Nome nome="Daiane" sobrenome="Bonacini" />
    </Familia>*/}
    {/* <FamiliaBonacini sobrenome = "Bonacini"/> */}

    </div>
    , element)