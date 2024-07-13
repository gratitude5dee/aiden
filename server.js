const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002; // Changed port to 3002

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});