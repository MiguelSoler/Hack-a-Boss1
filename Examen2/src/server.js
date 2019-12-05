const axiosCacheAdapter = require('axios-cache-adapter');
const config = require('config');

const express = require('express');
const bodyParser = require('body-parser');

const utils = require('./utils');  

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'debug',
  format: combine(
    label({ label: 'main' }), timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
    new transports.Console()
  ]
});

const api = axiosCacheAdapter.setup({
  // `axios-cache-adapter` options
  cache: {
    maxAge: 0.5 * 60 * 1000
  }
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let events = [];

app.get('/events', (req, res) => {

  const apiKey = req.query['999111222'];

  if (apiKey === undefined) {
    res.status(400).send('¡Falta la contraseña! Tú no eres Caballero');
    return;
  }
  if (req.query.city !== undefined) {
    const filteredField = events.filter (item => item.city === req,query.city);
    res.send(filteredField);
  }
  
});


app.post('/events', (req, res) => {
  let event = {};
  
  event['name'] = req.body['name'];
  event['type'] = req.body['type'];
  event['date'] = req.body['date'];
  event['city'] = req.body['city'];
  
  for (let key of Object.keys(event)) {
    if (event[key] === undefined) {
      const value = event[key].trim();

      if (value.length === 0) {
        res.status(400).send();
        return;
      }
    }
  }

  if ( req.body['description'] !== undefined) {
    event['description'] = req.body['description'];
  }

  events.push(event);
 
  res.send(event);
})

const port = config.get('server.port');

app.listen(port, function () {
  logger.info(`Starting points of interest application listening on port ${port}`);
});
