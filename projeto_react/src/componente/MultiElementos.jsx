import React from "react"

const Teste1 = (props) =>
    [
        <h1>Teste1</h1>,
        <h1>Teste1</h1>
    ]

const Teste2 = (props) =>
    <>
        <h1>Teste2</h1>
        <h1>Teste2</h1>
    </>

const Teste3 = (props) =>
    <React.Fragment>
        <h1>Teste3</h1>
        <h1>Teste3</h1>
    </React.Fragment>

export { Teste1, Teste2, Teste3 }