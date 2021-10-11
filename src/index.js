// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '10mb' }));

// Arrancamos el servidor en el puerto 3000
const serverPort = 3001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.get('/card/:id', (req, res) => {
  console.log('Se mostraría la tarjeta');
  res.send('Se mostraría la tarjeta.');
});

server.post('/card', (req, res) => {
  console.log(req.body);
  if (true) {
    const identificadorUnico = uuidv4();
    const response = {
      success: true,
      cardURL: `http://localhost:${serverPort}/card/${identificadorUnico}`,
    };
    res.json(response);
  } else {
    const response = {
      success: false,
      error: 'Todavía no he implementado esta movida.',
    };
    res.json(response);
  }
});
