import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import NavBar from './components/nav/NavBar';
// import characters from './data.js';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);
   //crea un estado => characters  = [];

   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id =>{
      setCharacters(characters.filter(caracter => caracter.id !== Number(id)))
   }


   return (
      <div className='App'>
         <NavBar onSearch = {onSearch}/>
         <hr />
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}


export default App;
