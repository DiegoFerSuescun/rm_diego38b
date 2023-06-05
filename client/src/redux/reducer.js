import { FILTER, ORDER } from "./types";


const initialState = {
    myFavorites:[],
    allCharacters:[]
}

export default function reducer  (state = initialState, {type, payload}){

    switch(type){
     case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };
     case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };
     case FILTER:
        if(payload === 'ALL')return {
            ...state,
            myFavorites:state.allCharacters
        }
        const allCharactersCopy = [...state.allCharacters];
        const filteredCharacter = allCharactersCopy.filter(character => character.gender === payload);
        return {
            ...state,
            myFavorites: filteredCharacter
        }
     case ORDER:
        let orderedCharacter = [];
        if(payload === 'A'){
            orderedCharacter = state.allCharacters.sort(
                (a,b) => a.id - b.id
            )
        }else if (payload === 'D'){
            orderedCharacter = state.allCharacters.sort(
                (a,b) => b.id - a.id
            )
        }
        return {
            ...state,
            myFavorites: orderedCharacter
        }
     default:
        return {
            ...state
        }

    }
}


