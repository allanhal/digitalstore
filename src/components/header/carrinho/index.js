import { useState } from "react"

export default function Carrinho() {
    const [items, setItems] = useState(
        ["Ovo", "Leite"]
    )

    if( items && items.length > 0){
        return (<>{items.join(",")}</>)
    }
    return (<>Carrinho Vazio</>)
}