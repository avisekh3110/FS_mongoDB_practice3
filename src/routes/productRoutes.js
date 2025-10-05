const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.post('/seed', async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: 'T-Shirt',
        price: 499,
        category: 'Clothing',
        variants: [
          { color: 'Red', size: 'M', stock: 10 },
          { color: 'Blue', size: 'L', stock: 5 }
        ]
      },
      {
        name: 'Sneakers',
        price: 1999,
        category: 'Footwear',
        variants: [
          { color: 'White', size: '8', stock: 7 },
          { color: 'Black', size: '9', stock: 3 }
        ]
      },
      {
        name: 'Smartwatch',
        price: 4999,
        category: 'Electronics',
        variants: [
          { color: 'Silver', size: 'Standard', stock: 12 }
        ]
      }
    ];
    await Product.insertMany(sampleProducts);
    res.json({ message: 'Sample products inserted!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get('/category/:name', async (req, res) => {
  const products = await Product.find({ category: req.params.name });
  res.json(products);
});

router.get('/variants', async (req, res) => {
  const products = await Product.find({}, { name: 1, variants: { color: 1, size: 1 } });
  res.json(products);
});

module.exports = router;
