const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/api/users/register', (req, res) => {
  // Your registration logic here
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
