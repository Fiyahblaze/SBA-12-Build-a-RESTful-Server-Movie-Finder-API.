const axios = require("axios");

async function searchMovies(req, res) {
  const title = req.query.title;

  if (!title || !title.trim()) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Unable to search for movies",
    });
  }
}

async function getMovieDetails(req, res) {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        i: req.params.id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Unable to get movie details",
    });
  }
}

module.exports = { searchMovies, getMovieDetails };