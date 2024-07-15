const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Ensure you import the userRoutes

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Use the routes
app.use('/api/users', userRoutes); // Mount the userRoutes under /api/users

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
