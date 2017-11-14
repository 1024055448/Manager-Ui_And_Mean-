var express=require('express');
var router=express.Router();
var myModel=require('../database/get_model');

router.post('/',function(req,res,next){
	var doc={username:req.body.username,password:req.body.pwd};
	//console.log(doc);
	myModel.count(doc,function(err,mod){
		if(err) console.log(err);
		else
			{
				if(mod==1)
				{
					//console.log(mod);
					res.json(mod);
					//res.write('用户名');
				}
				else
				{
					console.log('用户名密码错误');
				}
			}
	});
	
});

module.exports=router;