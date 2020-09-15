const { Router } = require('express');
const path = require('path');
const fs = require('fs');

const home = Router();

const PROFILES = require('../../assets/profiles.json');

home.get('/:id', (request, response) => {
  const { id: inputId } = request.params;
  const profile = PROFILES.find(({ id }) => (id === inputId));

  if (!profile) {
    return (response.status(404).send('Profile with given ID not found'));
  }

  return (response.send(profile));
});

home.get('/img/:id', (request, response) => {
  const { id: inputId } = request.params;
  const image_name = path.resolve(
    __dirname,
    '../../assets/img',
    `${inputId}.jpg`,
  );

  const missing_image = path.resolve(
    __dirname,
    '../../../client/public/img/missing_image.png',
  );

  if (!fs.existsSync(image_name)) {
    return (response.sendFile(missing_image));
  }
  return (response.sendFile(image_name));
});

module.exports = home;
