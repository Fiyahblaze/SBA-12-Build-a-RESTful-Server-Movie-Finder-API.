# Movie Finder API

This is a simple RESTful API I built with Express. It gets movie information from OMDb and returns the results as JSON.

## What it does

- Search for movies by title with `GET /api/search?title=batman`
- Get details for one movie with `GET /api/movies/tt0372784`
- Return a 400 error when a search title is missing

## Built with

Node.js, Express, Axios, dotenv, and the OMDb API.

## How to run it

1. Run `npm install`.
2. Create a `.env` file in the project root:

   ```env
   OMDB_API_KEY=your_key_here
   PORT=3001
   ```

3. Run `npm start`.
4. Open the endpoints above in your browser.

The API key goes in `.env`, which is ignored by Git and should not be pushed to GitHub.

## Project structure

`server.js` starts the server. `routes/movieRoutes.js` defines the endpoints, and `controllers/movieController.js` handles the requests to OMDb.