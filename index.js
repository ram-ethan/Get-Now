const express = require("express");
const app = express();
const cors = require("cors");
const route = require('./routes/routes.js')
const PORT = 8000;
const dbConnect = require("./database/db.js")
app.use(express.json());
app.use(cors());
app.use('/', route);
dbConnect();
app.listen(PORT, () => {
    console.log(`Server is running on PORT${PORT}`);
})