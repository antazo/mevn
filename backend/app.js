const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
