const { Router } = require('express');
const home = require('./home.ts');

const routes = Router();

routes.use('/', home);

module.exports = routes;
