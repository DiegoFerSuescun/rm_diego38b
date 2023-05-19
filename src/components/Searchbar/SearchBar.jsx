import { useState } from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
   const [id, setId] = useState('');

  const handleChange = event =>{
   const {value} = event.target;
   setId(value);
   // console.log('id: ', id);
  }

   return (
      <div className= {styles.container}>
         <input
            type='search' 
            name='search'
            id='serach'
            onChange={handleChange}
         />
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;
