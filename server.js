const express = require('express');
const path = require('path');
const serveStatic = require('server-static');

const app = require();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;

app.LITEN(PORT);