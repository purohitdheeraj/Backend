const express = require('express');

const app = express();

const database = {
  products: [
    {
      id: '123',
      productName: 'kaala chasma',
      price: 500
    },
    {
      id: '124',
      productName: 'chameli',
      price: 55
    },
    {
      id: '125',
      productName: 'pauwa',
      price: 15
    },
    {
      id: '127',
      productName: 'jalebi',
      price: 25
    }
  ]
}

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/products', (req, res) => {
  res.json(database.products);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = database.products.find(prod => prod.id === id);
  product ? res.json(product) : res.status(404).json({ message: 'id not found'})
})

app.listen(3000, () => {
  console.log('server started');
});
