# Reflection

For this project, I built a Movie Finder API using Express, Axios, and the OMDb API. I learned how to separate my routes and controllers instead of putting everything in the server file. The routes decide which function to run, and the controller gets the movie information and sends it back as JSON.

I ran into a couple of issues while working on it. My project was set to use ES modules, but my code used `require()`, so I changed the package setting to CommonJS. I also kept getting an error when searching for movies. Adding an error message in the terminal helped me see that OMDb was rejecting the API key. Once I fixed the value in `.env`, both the search and movie details endpoints worked.

I tested the missing-title route too, and it returned the 400 error the assignment asked for. This project helped me understand how an Express server connects routes, controllers, and an outside API.