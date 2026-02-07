const express = require("express");

const app = express();
const port = 3000;

// rota GET
app.get("/", (req, res) => {
  res.json({
    mensagem: "hello, my name is Melissa G. Silva!"
  });
});

// iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
