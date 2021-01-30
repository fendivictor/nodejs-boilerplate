const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

let routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
