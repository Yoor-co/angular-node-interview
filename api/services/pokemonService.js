const httpStatus = require("http-status");
const fetch = require('node-fetch');

const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    return data;
}


module.exports = {getPokemons};