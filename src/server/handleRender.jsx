import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App/index';

function renderFullPage(html) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta>(charset="UTF-8")</head>
        <title>Netflix Roulette</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const html = renderToString(<App />);
  res.send(renderFullPage(html));
}

export default handleRender;
