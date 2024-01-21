import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDb from "./connectDb/connect.js";

import useRouter from "./routes/user.routes.js";
import useProperty from "./routes/property.routes.js";

const app = express();

dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
const port = 8080;

app.use("api/users", useRouter);
app.use("api/properties", useProperty);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startSever = async () => {
  try {
    connectDb(process.env.URL);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startSever();
