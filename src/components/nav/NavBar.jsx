import SearchBar from "../Searchbar/SearchBar";
import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar(props) {
   return (
      <div>
         <NavLink to = "/home">
         <button>HOME</button>
         </NavLink>
         <NavLink to="/about">
         <button>ABOUT</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />
         
      </div>
   );
}
