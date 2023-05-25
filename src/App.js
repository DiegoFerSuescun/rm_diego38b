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
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = '123456';
   const navigate = useNavigate();

      function login (userData){
         if(userData.password === PASSWORD && userData.email ===EMAIL){
            setAcces(true);
            navigate('/home')
         }
      }
      
      useEffect(() =>{
         !acces && navigate ('/');
      }, [acces]);

   function onSearch (id ) {
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
      setCharacters(characters.filter(caracter =>
       caracter.id !== Number(id)))
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
