const express = require('express');
const { SERVER_PORT: PORT } = require('../../port_config');

// Setup debug logger
const debug = require('debug')('welcome-api');

const middleware = require('./middleware');
const routes = require('./routes');

// Create express App
const app = express();

// Setup routes
app.use(middleware);
app.use('/api', routes);

// Listen
app.listen(PORT, () => {
  debug(`Listening at http://localhost:${PORT}`);
});
