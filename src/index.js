const app = require('./app');
const Loaders = require('./app/database/index');

Loaders.start();

app.listen(3333, () => {
  console.log('Estou Funcionando');
});
