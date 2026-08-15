import express from "express";
import analyticsRoutes from "./routes/analytics.js";
import cors from "cors";

const app= express();
const port=3000;

app.use(cors());          // enable CORS
app.use(express.json()); //Automatically convert incoming JSON into a JavaScript object.

app.use("/api/analytics", analyticsRoutes);

app.get("/" ,(req,res)=>{  // "/" is equivalent too localhost:3000
    console.log(req.rawHeaders);
    res.send("Helloo");
});
app.listen(port, ()=>{  //call back fxn
    console.log(`Server running at ${port}.`);
});