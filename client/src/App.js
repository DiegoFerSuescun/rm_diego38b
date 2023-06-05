import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';
import About from './components/about/About';
import Cards from './components/Cards/Cards'
import Detail from './components/detail/Detail';
import NavBar from './components/nav/NavBar';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';



function App() {
   const [characters, setCharacters] = useState([]);
   //crea un estado => characters  = [];

   const [acces ,setAcces] =useState(false);
   const navigate = useNavigate();

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAcces(data);
         access && navigate('/home');
      });
   }
      
      useEffect(() =>{
         !acces && navigate ('/');
      }, [acces]);

   function onSearch (id ) {
      const characterId = characters.filter(character => character.id === Number(id));
      if(characterId.length) return alert ("The character exist on list");
      if(id <1 || id >826) return alert ("This character number does not exist ")
      
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id =>{
      setCharacters(characters.filter(caracter =>
       caracter.id !== id))
   }

   const location =useLocation();


   return (
      <div className='App'>
         {
         location.pathname !== "/"
         ?<NavBar onSearch = {onSearch}/>
         : null
         }
         <hr />
         <Routes>
            <Route exact path='/' element = {<Form login = {login}/>}/>
            <Route path='/home' element ={<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:detailId' element = {<Detail />}/>
            <Route path='/favorites' element = {<Favorites onClose = {onClose} />}/>
         </Routes>
      </div>
   );
}


export default App;
