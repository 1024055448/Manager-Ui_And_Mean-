var express=require('express');
var router=express.Router();
var myModel=require('../database/get_model');

router.post('/',function(req,res){
	var doc_username={username:req.body.username};
	myModel.findOne(doc_username,function(err,doc){
		if(err) throw err;
		else{
			if(doc!=null){
				//res.render('/',{title:'用户名已存在'});
				console.log('用户名已经存在');
			}
			else{
				console.log(req.body.pwd);
				console.log(req.body.repwd);
				if(req.body.pwd==req.body.repwd){
				var newModel={username:req.body.username,password:req.body.pwd};
				var Store_model=new myModel(newModel);
				Store_model.save(function(err,doc){
					if(err) throw err;
					else{
						//console.log(doc);
						res.json(doc);
					}
				});
			  }
			  	else{
			  		console.log('两次密码输入不一致');
			  	}	
			}
		///	}
		//	else{
		//		console.log('两次密码输入不一致');
		//	}
		}
	});
});
module.exports=router;