import express from 'express';
import router from './router/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(router())

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
