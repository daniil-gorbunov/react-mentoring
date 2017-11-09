import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../client/components/App/index';

function renderFullPage(html) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"></head>
        <title>Netflix Roulette</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const context = {};
  const app = (
    <Router location={req.url} context={context} >
      <App />
    </Router>
  );
  const html = renderToString(app);
  if (context.url) {
    return res.redirect(context.url);
  }
  return res.send(renderFullPage(html));
}

export default handleRender;
