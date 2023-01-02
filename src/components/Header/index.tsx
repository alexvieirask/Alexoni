import styles from "./header.module.scss"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header__text}>
                The house of code and dough
            </div>
        </header>
    )

}