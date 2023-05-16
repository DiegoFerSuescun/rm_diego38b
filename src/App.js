import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards'
import SearchBar from './components/Searchbar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Cards characters={characters} />
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
   );
}


export default App;
