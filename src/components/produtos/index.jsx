import Produto from "./produto";

export default function Produtos() {
    return (<div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Produto titulo="Produto 1" />
        <Produto titulo="Produto 2" />
        <Produto titulo="Produto 3" />
        <Produto titulo="Produto 4" />
        <Produto titulo="Produto 5" />
        <Produto titulo="Produto 6" />
        <Produto titulo="Produto 7" />
        <Produto titulo="Produto 8" />
        <Produto titulo="Produto 9" />
    </div>)
}