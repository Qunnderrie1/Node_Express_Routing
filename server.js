import express from "express";
import config from "./config/index.js";
import users from './routes/users.route.js'


// TODO: import router from routes/

const app = express();

const port = 3000;

app.use(express.json());ç

// TODO: use the imported router to handle all requests

app.use("/users" , users)

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
