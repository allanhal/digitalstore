import { useState } from "react"

export default function Carrinho() {
    const [exibir, setExibir] = useState(true)
    let ComponentCarrinhoHover = () => (<>
        <div style={{
            backgroundColor:'red',
            display: exibir ? 'flex' : 'none',
            flexDirection: 'column',
            position: 'absolute'
        }}>
            <span>Meu Carrinho</span>
            <span>Produto 1</span>
            <span>Produto 2</span>
            <span>Valor total</span>
            <button>Ver Carrinho</button>
        </div></>)
    return (
        <>
            <span onClick={() => setExibir(!exibir)}>Carrinho</span>
            <ComponentCarrinhoHover />
            <br />
            <span>Cadastre-se</span>
        </>
    )
}