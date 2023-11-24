const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["https://wa-thakkir.onrender.com/"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const teachingsRouter = require("./routes/teachings");
app.use("/api/teachings", teachingsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
