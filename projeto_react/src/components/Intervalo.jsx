import "./Intervalo.css"
import React from "react"

import Card from "./Card"

export default props => {
  /*   const { min, max } = props */
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Mínimo:</span>
                   {/*  <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} /> */}
                    <input type="number" value={1} />
                </span>
                <span>
                    <span>Máximo:</span>
                    {/* <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} /> */}
                    <input type="number" value={30} />
                </span>
            </div>
        </Card>
    )
}