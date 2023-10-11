const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const compression = require("compression");

const PORT = process.env.PORT;
const app = express();
//Prisma
const prisma = new PrismaClient();

app.use(compression());

app.use(express.static(path.join(__dirname, "dist")));
app.route('/mongo')
  .get(async (req, res) => {
    const quotes = await prisma.quotes.findMany();
    res.json(quotes);
  });
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
