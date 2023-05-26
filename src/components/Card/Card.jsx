import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card(props) {

   const [isFav, setIsFav] =useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id)
      } else {
         setIsFav(true);
         props.addFav(props)
      }
   };
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [props.myFavorites]);

   return (
      <div className = {styles.container}>
         <div className = {styles.contBoton}>
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
             <button onClick={handleFavorite}>🤍</button>
          )
         }
         <button onClick={ props.onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
         <h2>{props.name}</h2>
         <h4>{props.status} </h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         </div>
         {/* <h2>{props.origin.name}</h2> */}
         <Link to = {`/detail/${props.id}`}>
         <img className= {styles.image} src={props.image } alt={props.name} /> 
         </Link>
      </div>  
   );
};


const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character) =>dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);




