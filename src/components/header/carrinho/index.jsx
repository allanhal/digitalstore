import { useState } from "react"

export default function Carrinho() {
    const [exibir, setExibir] = useState(true)
    let ComponentCarrinhoHover = () => (<>
        <div style={{
            display: exibir ? 'flex': 'none',
            flexDirection: 'column'
        }}>
            <span>Meu Carrinho</span>
            <span>Produto 1</span>
            <span>Produto 2</span>
            <span>Valor total</span>
            <button>Ver Carrinho</button>
        </div></>)
    return (
        <>
            <span onMouseEnter={()=> setExibir(true)} onMouseLeave={()=> setExibir(false)}>Carrinho</span>
            <ComponentCarrinhoHover />
        </>
    )
}