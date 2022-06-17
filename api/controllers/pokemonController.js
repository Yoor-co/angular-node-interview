const pokemonService = require('../services/pokemonService');

const getPokemons = async (req, res) => {
    const pokemonData = await pokemonService.getPokemons();
    res.json(pokemonData)
    
}

module.exports = {getPokemons};