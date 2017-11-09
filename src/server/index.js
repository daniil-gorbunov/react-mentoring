import express from 'express';
import handleRender from './handleRender';

const app = express();
const PORT = 3001;


app.use(express.static('public'));
app.get('/*', handleRender);

app.listen(PORT, () => {
  // console.info(`Listening on ${PORT}...`);
});
