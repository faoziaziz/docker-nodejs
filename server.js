'use strict';
const express=require('express');

//constant
const PORT=8080
const HOST='localhost';

//app
const app=express();
app.get('/', (req, res)={
  res.send('Hello World\n');
});

app.listen(PORT, HOST);
console.log(`Running on host://${HOST}:${PORT}`);
