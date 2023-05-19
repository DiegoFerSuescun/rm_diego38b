import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className = {styles.container}>
         <div className = {styles.contBoton}>
         <button onClick={ props.onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
         <h2>{props.name}</h2>
         <h4>{props.status} </h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         </div>
         <h2>{props.origin.name}</h2>
         <Link to = {`/detail/${props.id}`}>
         <img className= {styles.image} src={props.image } alt={props.name} /> 
         </Link>
      </div>
      
   );
}


