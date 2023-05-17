import Card from '../Card/Card.jsx';

const Cards = ({characters, onClose}) => {
   return (
      <div style={{display:'flex', flexWrap: 'wrap',justifyContent:'center' }}>
      {
         characters.map((char)=>{
            return(
               <Card
                  key = {char.id}
                  id = {char.id}
                  name = {char.name}
                  species = {char.species}
                  gender = {char.gender}
                  image = {char.image}
                  origin = {char.origin.name}
                  status = {char.status}
                  onClose = {onClose}
               />

            )
         })    
      }
      </div>
   )
}
export default Cards;

