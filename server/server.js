const express = require('express')
const app = express();
require('dotenv').config()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const PORT = process.env.PORT || 5000;
const path = require('path');
//const {registerLicense} = require('@syncfusion/ej2-base');

//registerLicense(process.env.SYNCFUSION_KEY);
app.use(express.static(path.join(__dirname, '../client', 'dist')))
app.get('/mongo', async (req, res) => {
    const comments = await prisma.comment.findMany()
    res.json(comments);
})
app.post('/mongo', async (req, res) => {
    console.log(req.body)
    res.status(200).send('Yess!!!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})