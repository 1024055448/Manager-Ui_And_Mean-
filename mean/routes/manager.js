var express=require('express');
var router=express.Router();
var myModel=require('../database/get_model');

router.get('/',function(req,res){
	myModel.find({},function(err,mod){
		if(err) throw err;
		res.json(mod);
	})
});
router.get('/:id',function(req,res){
	myModel.findOne({_id:req.params.id},function(err,mod){
		if(err) throw err;
		//console.log(mod);
		res.json(mod);
	});
});
router.put('/:id',function(req,res){
	myModel.update({
		_id:req.params.id
	},
	{	
		username:req.body.username,
		password:req.body.pwd
	},function(err,mod){
		if(err) throw err;
		//console.log(mod);
		res.json(mod);
	});
});
router.delete('/:id',function(req,res){
	myModel.remove({_id:req.params.id},function(err,mod){
		if(err) throw err;
		res.json(mod);
	});
});
module.exports=router;