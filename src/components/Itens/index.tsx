import menu from "./itens.json"
import Item from "./item"

export default function Itens(){
    return(
        <div>{menu.map(item => (
            <Item key={item.id} {...item} />
        ) )}</div>
    )
}