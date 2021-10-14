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
  console.log('body:', req.body);

  if (req.body.name === '') {
    const response = {
      success: false,
      error: 'Falta el campo del nombre.',
    };
    res.json(response);
  } else if (req.body.job === '') {
    const response = {
      success: false,
      error: 'Falta el campo del puesto.',
    };
    res.json(response);
  } else if (req.body.email === '') {
    const response = {
      success: false,
      error: 'Falta el campo del email.',
    };
    res.json(response);
  } else if (req.body.linkedin === '') {
    const response = {
      success: false,
      error: 'Falta el campo del Linkedin.',
    };
    res.json(response);
  } else if (req.body.photo === '') {
    const response = {
      success: false,
      error: 'Falta el campo de la foto.',
    };
    res.json(response);
  } else {
    const identificadorUnico = uuidv4();
    const response = {
      success: true,
      cardURL: `http://localhost:${serverPort}/card/${identificadorUnico}`,
    };
    res.json(response);
  }
});

server.get('/card/:id', (req, res) => {});

const staticServerPathWeb = './public'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

// Endpoint para gestionar los errores 404
server.get('*', (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
