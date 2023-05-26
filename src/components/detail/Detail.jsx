import styles from './Detail.module.css'
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";


export default function Detail(props){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);
    
    
    return (
        <div className={styles.contenedorDetail}>

            <h2>{character.name}</h2>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Status: {character.status}</h3>
            <Link to={'/home'}>
                <img src={character.image} alt={character.name}  className={styles.image} />
            </Link>
        </div>
    )
}