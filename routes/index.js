var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const apikey= process.env.API_KEY_TMDB;


/* GET home page with movies from API. */

router.get('/movies', function (req, res, next) {
    fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2023&with_watch_monetization_types=flatrate`)
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results })
        })
        .catch(err => {
            res.json({ result: false, error: err })
        })
});

module.exports = router;
