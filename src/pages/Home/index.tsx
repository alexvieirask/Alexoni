import { useState } from 'react'
import styles from "./home.module.scss"
import { ReactComponent as Logo} from "assets/logo.svg"
import Header from "components/Header"
import Search from "components/Search"
import Filters from 'components/Filters'
import Order from 'components/Order'
import Itens from 'components/Itens'

export default function Home(){
    const [ search, setSearch ] = useState("")
    const [ filter, setFilter ] = useState<number | null>(null)
    const [ order, setOrder] = useState("")

    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <Header/>
            <section className={styles.carte}>
                <h3 className={styles.carte__title}>Menu</h3>
                <Search search={search} setSearch ={ setSearch }/>
                <div className={styles.carte__filters}>
                    <Filters filter = {filter} setFilter= {setFilter}/>
                    <Order order={order} setOrder= {setOrder} />
                </div>
                <Itens />
       
            </section>
            
        </main>
    )
}