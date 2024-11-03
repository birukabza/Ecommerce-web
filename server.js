import express from "express";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";

(async () => {
  if (process.env.NODE_ENV !== "production") {
    const dotenv = await import("dotenv");
    dotenv.config();
  }
})();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/dist", "index.html"))
    })
}


app.listen((port, error) => {
    if (error){
        throw error;
    }
    console.log("Server running on port " + port)
})