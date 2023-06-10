const express = require('express');
const volleyball = require('volleyball');
const PORT = process.env.PORT || 3000;
const bp = require('body-parser');

const todoRoutes = require('./routes/todoRoutes.js');
const errorHandler = require('./error/errorHandler.js');
const handleNotFound = require('./error/handleNotFound.js');

const { testDBConnection } = require('./configs/db.config.js');
const app = express();

app.use(bp.json());
app.use(volleyball);
testDBConnection();
app.use('/api/todos', todoRoutes);

app.use(handleNotFound);
app.use(errorHandler);

app.listen(PORT, () => {
    //console.log(`http://localhost:${PORT}/api/todos`);
});

module.exports = app;
