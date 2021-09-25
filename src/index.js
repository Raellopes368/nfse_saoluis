require('dotenv/config');
const server = require('./server');
const { port } = require('./configs/server');

server.listen(port, () => {
  console.log(`running in http://localhost:${port}`);
});
