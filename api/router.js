const express = require('express');
const pokemonController = require('./controllers/pokemonController');

const router = express.Router();

router
    .route('/getPokemons')
    .get(pokemonController.getPokemons)

module.exports = router;
