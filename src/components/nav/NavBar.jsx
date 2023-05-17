import SearchBar from "../Searchbar/SearchBar";
import React from "react";


export default function NavBar(props) {
   return (
      <div>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}


