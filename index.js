import express from 'express';
import "dotenv/config.js";
const app = express();
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import adminRouter from './routers/adminRouter.js'
import dbConnect from './config/dbConfig.js';
import cors from 'cors'
dbConnect()

const port = process.env.PORT || 4000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  cors({
    // credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
    ],
  })
);

app.use('/',userRouter)
app.use('/admin',adminRouter)
app.use('/product',productRouter)


app.listen(port, () => {
  console.log(`server running on ${port}`);
});