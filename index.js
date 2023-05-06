const express = require("express");
const Connect = require("./Database/db");
const Route = require("./Routes/router.js");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", Route);
app.get("/", Route);


app.listen(8080, async () => {
  await Connect();
  console.log(`Server start at port - http://localhost:8080}`);
});
