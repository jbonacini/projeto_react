import React from "react";

// function func1(){
//     return <h1>Primeiro Componente</h1>
// }
// export default func1

// export default () => <h1>Nosso componente Arrow </h1>

// export default () => (5+7)

export default (props) =>

    <div>
        <h1>
            {props.valor}
        </h1>
        <h2>{props.soma}</h2>
    </div>