var mongoose=require('mongoose');
var schema=require('./getSchema');
var model=mongoose.model('user_infos',schema);
module.exports=model;