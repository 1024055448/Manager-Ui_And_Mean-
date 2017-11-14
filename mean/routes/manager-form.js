var express=require('express');
var router=express.Router();
var myModel=require('../database/get_model');

router.get('/',function(req,res,next){
	res.render('home',{title:''})
});
module.exports=router;