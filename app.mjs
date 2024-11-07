import express from 'express';
import { connectDB } from './src/config/dbConfig.mjs';
import router from './src/routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});