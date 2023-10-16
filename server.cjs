const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const compression = require("compression");
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
//Prisma
//const prisma = new PrismaClient();
let prisma = null;
//console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'product') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma
}

app.use(compression());
app.use(cors())
app.use(express.static(path.join(__dirname, "dist")));
app.get('/mongo', async (req, res) => {
    const quotes = await prisma.quotes.findMany();
    res.json(quotes);
  });
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
