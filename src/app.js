const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');


const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_catalog")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
