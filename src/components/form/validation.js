
export default function validate(input){
        //input = {email:----, password:----}

    const error ={};

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)){
        error.email = 'Debe ingresar un email valido';
    }
    if(!input.email){
        error.email = 'Debe ingresar un Email';
    }
    if(input.email.length > 35){
        error.email = 'No mayor a 35 caracteres';
    }
    if(!regexPassword.test(input.password)){
        error.password = 'Debe tener al menos un numero!!!';
    }
    if(input.password.length < 6 || input.password.length > 10){
      error.password = 'La contraseña debe tener entre 6 a 10 caracteres'  
    }
    return error;
}