import styles from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
   return (
      <div className= {styles.container}>
         <input type='search' />
         <button onClick={ onSearch }>Agregar</button> 
      </div>
   );
}

export default SearchBar;
