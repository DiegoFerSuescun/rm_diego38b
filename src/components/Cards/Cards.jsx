import Card from '../Card/Card.jsx';

const Cards = ({characters}) => {
   return (
      <div style={{display:'flex', flexWrap: 'wrap',justifyContent:'center' }}>
      {
         characters.map((char)=>{
            return(
               <Card
                  key = {char.id}
                  name = {char.name}
                  species = {char.species}
                  gender = {char.gender}
                  image = {char.image}
                  origin = {char.origin.name}
                  status = {char.status}
                  onClose = {() => window.alert('Emulamos que se cierra la card')}
               />

            )
         })    
      }
      </div>
   )
}
export default Cards;

