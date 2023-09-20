const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client', 'dist')))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})