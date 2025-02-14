import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config();

const app=express();
import router from './routes/restaurantRoutes.js'

app.use(cors());
app.use(bodyParser.json());

const PORT=process.env.PORT

const url=process.env.MONGO_URL;
mongoose.connect(url).then(()=>{
  console.log("Connected to MongoDB!");
  app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err); 
});
app.use("/api",router)



