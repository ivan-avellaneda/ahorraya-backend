const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/search', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
