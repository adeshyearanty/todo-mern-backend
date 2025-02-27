import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import connectDB from './db/db-conn.js';
import { PORT } from './config/config.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

function startServer() {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
