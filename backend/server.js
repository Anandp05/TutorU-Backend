const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', authRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5005;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
