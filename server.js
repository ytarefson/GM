const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/raspredelennaya-generaciya', (req, res) => {
    return app.render(req, res, '/rasGen', req.query);
  });
  server.get('/novosti', (req, res) => {
    return app.render(req, res, '/news', req.query);
  });
  server.get('/proekti', (req, res) => {
    return app.render(req, res, '/projects', req.query);
  });
  server.get('/proekti/:id', (req, res) => {
    return app.render(req, res, '/proekti', { id: req.params.id });
  });
  server.get('/produkciya', (req, res) => {
    return app.render(req, res, '/products', req.query);
  });
  server.get('/uslugi', (req, res) => {
    return app.render(req, res, '/services', req.query);
  });
  server.get('/o-komnanii', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query);
  });

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
