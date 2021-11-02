const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

app.get('/tasks', (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));