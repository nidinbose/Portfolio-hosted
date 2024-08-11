import express from 'express';
import connection from "./back-end/connection.js";
import env from 'dotenv';
import router from './back-end/router.js';
import cors from 'cors';

env.config();
const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" })); 

app.use('/api', router);

connection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
});

// app.listen(3003,(req,res)=>{
//     console.log("starting server");
// })