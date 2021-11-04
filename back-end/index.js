const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 3001;

app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));