import axios from "axios"
import { useParams } from "react-router-dom"
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
        <div style={{backgroundColor:'lightgray'}}>
            
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}  />
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>


        </div>
    )
}