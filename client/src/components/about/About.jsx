import styles from './About.module.css'
import { Link } from "react-router-dom"

export default function About(props){
    return (
        <div className={styles.contenedor}>
            <h1>Created By:</h1>
            <h2>DIEGO SUESCUN</h2>
            <h3>Cohorte FT38B</h3>
            <Link to={'/home'}>
                <img className={styles.imagen} src="https://cdn.superaficionados.com/imagenes/rick-sanchez-0-cke.jpg" alt="DiegoS"/>
            </Link>
         </div>
    )
}