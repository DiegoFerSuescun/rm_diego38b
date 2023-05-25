import SearchBar from "../Searchbar/SearchBar";
import styles from "./NavBar.module.css"
import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar(props) {
   return (
      <div className={styles.barra}>
         <NavLink to = "/home">
         <button className={styles.boton}>HOME</button>
         </NavLink>
         <NavLink to = "/favorites">
         <button className={styles.boton} >FAVORITES</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />
         <NavLink to="/about">
         <button className={styles.boton}>ABOUT</button>
         </NavLink>
         
      </div>
   );
}
