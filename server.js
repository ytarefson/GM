const express = require('express');
const next = require('next');
var helper = require('sendgrid').mail;
const async = require('async');
const email = require('./routes/api/email');
const testEmail = require('./routes/test/testEmail');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/raspredelennaya-generaciya', (req, res) => {
    return app.render(req, res, '/rasGen', req.query);
  });
  server.get('/form', (req, res) => {
    return app.render(req, res, '/form', req.query);
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
  server.get('/proekti/:id', (req, res) => {
    const actualPage = '/project';
    const queryParams = { id: req.params.id };
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
  server.get('/uslugi/proektirovanie-avtonomnih-energocentrov', (req, res) => {
    const actualPage = '/AutoCenters';
    const queryParams = {
      serviceName: 'proektirovanie-avtonomnih-energocentrov'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/postavka-vspomogatelnogo-oborudovaniya', (req, res) => {
    const actualPage = '/VspomOborud';
    const queryParams = {
      serviceName: 'postavka-vspomogatelnogo-oborudovaniya'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/izgotovlenie-i-postavka-mini-tec', (req, res) => {
    const actualPage = '/MiniTec';
    const queryParams = {
      serviceName: 'izgotovlenie-i-postavka-mini-tec'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/racshet-ekonomicheskoi-effektivnosti', (req, res) => {
    const actualPage = '/RacshetEcoEff';
    const queryParams = {
      serviceName: 'racshet-ekonomicheskoi-effektivnosti'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/podbor-optimalnih-agregatov', (req, res) => {
    const actualPage = '/OptimalAgregates';
    const queryParams = {
      serviceName: 'podbor-optimalnih-agregatov'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/postavka-zapasnih-chastei', (req, res) => {
    const actualPage = '/Zapchasti';
    const queryParams = {
      serviceName: 'postavka-zapasnih-chastei'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/pusko-naladochnie-raboti', (req, res) => {
    const actualPage = '/PuskoNalad';
    const queryParams = {
      serviceName: 'pusko-naladochnie-raboti'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/uslugi/chef-montazh', (req, res) => {
    const actualPage = '/ChefMontazh';
    const queryParams = {
      serviceName: 'chef-montazh'
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('/o-komnanii', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });
  server.use('/api/email', email);
  server.use('/test/testEmail', testEmail);
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
