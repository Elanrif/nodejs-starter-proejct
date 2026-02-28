// Importer le module HTTP intégré de Node.js
const http = require("http");

// Définir le port sur lequel le serveur écoutera
const PORT = 3000;

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  // Définir l'en-tête de la réponse
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Envoyer une réponse simple
  res.end("Bonjour tout le monde, monde !\n");
});

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
