const express = require('express');
const next = require('next');
var helper = require('sendgrid').mail;
const async = require('async');
const email = require('./routes/api/email');
const sitemap = require('./sitemap');
const compression = require('compression');
const https = require('https');
const fs = require('fs');
const devcert = require('devcert');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
devcert
  .certificateFor('www.mysitelocal.com', { installCertutil: true })
  .then(ssl => {
    https.createServer(ssl, app).listen(8443, err => {
      console.log('listening you');
      if (err) throw err;
    });
  });
