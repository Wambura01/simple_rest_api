import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./Routes/users.js";

const app = express(); // initialize express server
const PORT = 5000; // default server port

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello Wambura!"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
