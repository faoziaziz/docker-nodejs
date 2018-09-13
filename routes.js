var crypto =require('crypto');
var express = require('express');
module.exports=function(app){
  var users=require('./kontoler/user_contoller');
  app.use('/statik', express.static('./statik')).
  use('/lib', express.static('./lib')
);

}
