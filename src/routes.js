const { Router } = require('express');
const NfseController = require('./app/controllers/NfseController');

const routes = Router();

routes.get('/nfse', NfseController.index);
routes.get('/nfse/:id', NfseController.show);
routes.put('/nfse', NfseController.update);
routes.post('/nfse', NfseController.store);
routes.delete('/nfse', NfseController.delete);

module.exports = routes;
