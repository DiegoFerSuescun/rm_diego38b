import styles from './Form.module.css'
import React from "react";
import validate from "./validation";

export default function Form(props){

    const [userData , setUserdata] = React.useState({
        email: '',
        password: ''
    })

    const [errors ,setErros] = React.useState({})

    const handleChange = event =>{
        const {name, value} =event.target;
        setUserdata({
            ...userData,
            [name]: value
        })
        setErros(validate({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.fondo}>
            <form className= {styles.container} onSubmit={handleSubmit}>
                <label className={styles.tituloRick} >RICK & MORTY</label>
                <label className={styles.etiqEmail}>Email:</label>
                <input 
                    type='text'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                />
                <p className= {styles.errors}>{errors.email ? errors.email : null}</p>

                <label className={styles.etiqPassword}>Pasword:</label>
                <input 
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                />
                <p className= {styles.errors}>{errors.password ? errors.password : null}</p>
                <button className={styles.boton} type="submit">Submit</button>
            </form>
        </div>

    )
}