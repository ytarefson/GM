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
  server.get('/rasGen', (req, res) => {
    return app.render(req, res, '/rasGen', req.query);
  });
  server.get('/novosti', (req, res) => {
    return app.render(req, res, '/news', req.query);
  });
  server.get('/novosti/:id', (req, res) => {
    const actualPage = '/newsUnit';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/news', (req, res) => {
    return app.render(req, res, '/news', req.query);
  });
  server.get('/proekti', (req, res) => {
    return app.render(req, res, '/projects', req.query);
  });
  server.get('/projects', (req, res) => {
    return app.render(req, res, '/projects', req.query);
  });
  server.get('/proekti?category:category', (req, res) => {
    const actualPage = '/project';
    const queryParams = { id: req.params.category };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/produkciya', (req, res) => {
    return app.render(req, res, '/products', req.query);
  });
  server.get('/products', (req, res) => {
    return app.render(req, res, '/products', req.query);
  });
  server.get('/products/:category', (req, res) => {
    return app.render(req, res, '/products', req.query);
  });
  server.get('/products/:category/:id', (req, res) => {
    const actualPage = '/product';
    const queryParams = { id: req.params.id, category: req.params.category };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi', (req, res) => {
    return app.render(req, res, '/services', req.query);
  });
  server.get('/services', (req, res) => {
    return app.render(req, res, '/services', req.query);
  });
  server.get('/o-komnanii', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
