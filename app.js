const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());

app.use("/movies", movieRoutes); // Menggunakan rute film.



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
