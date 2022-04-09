const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/joke.routes")(app);

app.listen(port, () => console.log(`Server connected on port ${port}`));