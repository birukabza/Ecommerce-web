import express from "express";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import Stripe from "stripe";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get("/config", (req, res) => {
    res.send({ publishableKey : process.env.STRIPE_PUBLISHABLE_KEY });
})

app.post("/create-payment-intent", async (req, res) => {
  console.log("server.js: Request received at /create-payment-intent")
  const {amount} = req.body;

  if (!amount || typeof(amount)!=="number"){
    res.status(400).send({error: "Invalid amount"})
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount,
      automatic_payment_methods: { enabled: true },
    })

    res.send({
      clientSecret: paymentIntent.client_secret,
    });

    }
  catch(error){
    console.error("Error creating payment intent in server" + error.message)
    res.status(400).send({error: "Unable to process request"})
  }
})


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
    })
}


app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server running on port " + port);
});
