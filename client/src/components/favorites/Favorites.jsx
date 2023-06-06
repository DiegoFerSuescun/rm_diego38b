import { connect, useDispatch } from 'react-redux';
import style from './Favorites.module.css'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';



const Favorites = ({myFavorites , onClose}) =>{

   
   const [aux, setAux] = useState(false);

   const dispatch = useDispatch();

   const handleOrder =(event) =>{
      dispatch(orderCards(event.target.value));
      aux ? setAux(false) : setAux(true);
   }

   const handleFilter = (event) =>{
      dispatch(filterCards(event.target.value));
   }
   console.log(myFavorites);
   return(
         <div>
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendent</option>
               <option value="D">Descendent</option>
            </select>
            <select name="filter" onChange={handleFilter} >
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
      <div >
         <div className={style.container}>

          {
            myFavorites.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() =>onClose (character.id)}
               />
               
            ))
            
         }

         </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect ( mapStateToProps,null)(Favorites)
