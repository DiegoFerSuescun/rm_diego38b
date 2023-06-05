const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

module.exports = (req, res) =>{
    const { id } = req.params;
    axios.get(URL + id)
        .then(response =>{
            const { 
                status, name, species, origin, image, gender
            } = response.data;
            const character = {
                id, status,name, species, origin, image, gender
            }
        return name 
        ? res.status(200).json(character)
        : res.status(404).send('Not found')
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
};