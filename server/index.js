const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const connect = require("./config/db");
const productRoute = require('./routes/productRoute')

// custom middlewares
app.use(express.json())
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// port
const PORT = process.env.PORT || 4000;
// mongoDb connection
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!",error);
  });

  app.get('/api/v1/', (req, res) => {
    res.json({
      message: "app is running",
    });
  });
// api routes
app.use('/api/v1',productRoute)

