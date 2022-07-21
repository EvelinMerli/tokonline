const express = require ("express");
const productRouter = require("./src/database/product/product.route");
const app = express();
const port = 8000;

app.get("/", (req,res) => {
    res.send ("hello cek");
});

app.use(productRouter);

app.listen (port, () =>
    console.log(">Server is up and running on port:" + port)
    );