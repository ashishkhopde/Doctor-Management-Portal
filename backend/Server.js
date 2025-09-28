import express from "express";
import cors from "cors";
import 'dotenv/config.js';

import ConnectDB from "./Config/DBConfig.js";

import doctorRoutes from "./Routes/doctorRoutes.js"
import diseaseRoutes from "./Routes/diseaseRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

ConnectDB(); 

app.use("/api/doctor", doctorRoutes);
app.use("/api/disease", diseaseRoutes);


app.listen(process.env.PORT, ()=>{
    console.log("listening...")
})