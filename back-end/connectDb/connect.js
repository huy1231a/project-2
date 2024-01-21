import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connect Succes"))
    .catch((erros) => {
      console.log(erros);
    });
};

export default connectDb;
