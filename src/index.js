// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
// importar el módulo better-sqlite3
const Database = require("better-sqlite3");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database("./src/db/dataBase.db", {
  // con verbose le decimos que todas las queries que se ejecuten las muestre en la consola
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

// Escribimos los endpoints que queramos
server.get("/card/:id", (req, res) => {
  console.log(req.params);

  const query = db.prepare("SELECT * FROM cards WHERE uuid=?");
  const cardData = query.get(req.params.id);

  console.log(cardData);

  res.render("preview", cardData);
});

server.post("/card", (req, res) => {
  console.log("body:", req.body);

  if (req.body.name === "") {
    const response = {
      success: false,
      error: "Falta el campo del nombre.",
    };
    res.json(response);
  } else if (req.body.job === "") {
    const response = {
      success: false,
      error: "Falta el campo del puesto.",
    };
    res.json(response);
  } else if (req.body.email === "") {
    const response = {
      success: false,
      error: "Falta el campo del email.",
    };
    res.json(response);
  } else if (req.body.linkedin === "") {
    const response = {
      success: false,
      error: "Falta el campo del Linkedin.",
    };
    res.json(response);
  } else if (req.body.photo === "") {
    const response = {
      success: false,
      error: "Falta el campo de la foto.",
    };
    res.json(response);
  } else {
    const identificadorUnico = uuidv4();
    // Aquí ponme un INSERT Soraya.
    const query = db.prepare(
      "INSERT INTO cards (uuid,palette, name, job, email, phone, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)"
    );
    const result = query.run(
      identificadorUnico,
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );
    const response = {
      success: true,
      cardURL: `http://localhost:${serverPort}/card/${identificadorUnico}`,
    };
    res.json(response);
  }
});

const staticServerPathWeb = "./public"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerCard = "./templates"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerCard));

// Endpoint para gestionar los errores 404
server.get("*", (req, res) => {
  // Relativo a este directorio
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
