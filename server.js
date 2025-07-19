const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const urlRouter = require('./routes/url');
const db = require('./config/db');

app.use(express.json());
app.use('/', urlRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
