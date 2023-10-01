import express from 'express';

import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser';

const app = express();
const prisma = new PrismaClient()
const PORT = 5000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.raw());
//const jsonParser = bodyParser.json()

app.get('/mongo', async (req,res) => {
    const comments = await prisma.comment.findMany();
    res.json(comments)
})
app.get('/mongo2:name', async (req,res) => {
    console.log(req.params.name)
    //res.status(200)
    res.send(req.params.name)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})