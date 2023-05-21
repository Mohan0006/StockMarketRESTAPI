const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user')
const stock = require('./routes/stock')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")




app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"))
app.use(cors())




const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Stock Market API",
        version: "1.0.0",
        description: "A simple Express Library API"
      },
      servers: [
        {
          url: "http://localhost:3000"
        }
      ]
    },
    apis: ["./routes/*.js"]
  };


const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api',user)
app.use('/api/stock',stock)

module.exports = app;