const express = require('express')
const app = express();
require('dotenv').config()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client', 'dist')))
app.get('/mongo', async (req, res) => {
    const comments = await prisma.comment.findMany()
    res.json(comments);
})
//app.post()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})