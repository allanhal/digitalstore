import { useState } from "react"

export default function Banner() {
    let componente1 = <div>
        carrossel1
    </div>
    let componente2 = <div>
        carrossel2
    </div>
    let arrayComponentes = [componente1, componente2]
    const [elementoIndice, setElementoIndice] = useState(0);
    function handleMudarElemento() {
        if (elementoIndice === 0) {
            setElementoIndice(1)
        } else {
            setElementoIndice(0)
        }
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px'
        }}>
            {arrayComponentes[elementoIndice]}
            <button onClick={() => handleMudarElemento()}>Elemento 1</button>
        </div>
    )
}