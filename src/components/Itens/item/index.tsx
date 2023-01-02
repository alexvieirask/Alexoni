import styles from "./item.module.scss"
import itens from "../itens.json"

type Props = typeof itens[0]

export default function Item( props  : Props){
    const { title, description, category, size, serving, price, photo } = props
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt="" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>{category.label}</div>
                    <div className={styles.item__porcao}>{size}</div>
                    <div className={styles.item__qtdpessoas}>Serve {serving} pessoa {serving === 1 ? '': 's'}</div>
                    <div className={styles.item__valor}>{price}</div>
                </div>
            </div>
        </div>
    )
}