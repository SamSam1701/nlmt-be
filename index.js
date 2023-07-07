const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rfs = require("rotating-file-stream");
import path from "path";
const dotenv = require("dotenv");
const connectDatabase = require("./src/configs/db.config");
dotenv.config();

connectDatabase();

const port = process.env.PORT || 3333;
const isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream("access.log", {
    interval: "1d",
    path: path.join(__dirname, "log"),
});

app.use(isProduction ? morgan("combined", {stream: accessLogStream}) : morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", require('./src/routes/router').default);
app.get("/", (req, res)=> {
    res.json({
        message: "CCCC",
    })
})

app.get("*", (req, res)=>{
    res.json({
        message: "Error hehe",
    })
})

app.listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
})