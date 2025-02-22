import express, {json} from 'express';
import connectDB from './config/db.js';
import {router as userRoutes} from './routes/userRoutes.js';
import {router as quotesRoutes} from './routes/quotesRoutes.js';
import cors from  'cors';


const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(json());

connectDB();

app.use('/api/users' , userRoutes)
app.use('/api/quotes' , quotesRoutes)

app.listen(port, () => {
    console.log(`Active on port ${port}`);
});
