import Card from '../Card/Card.jsx';

const Cards = ({characters, onClose}) => {
   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
   }

   console.log(characters);
   return (
      <div style={cardsContainer}>
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() =>onClose (character.id)}
               />
            ))
         }
      </div>
   );
}
export default Cards;

