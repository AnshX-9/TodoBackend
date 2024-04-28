const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const connectDB =  require('./config/db')
require('dotenv').config();

app.use(express.json());

connectDB();

app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
