angular.module('myAppCtrl',[])
.controller('indexCtrl',function($scope){
	$scope.name="aaa";
})
.controller('loginCtrl',['$scope','$resource','$location',function($scope,$resource,$location){
	var login_scope=$resource('/login');
    $scope.loginBtn=function(){
    	login_scope.save($scope.userinfo,function(){
    		//$scope.mode=users;
			$location.path('/manager');
    	});
    	//$location.path('/manager');
    };
}])
.controller('registerCtrl',['$scope','$resource','$location',function($scope,$resource,$location){
		var register_scope=$resource('/register');
		$scope.save=function(){
			register_scope.save($scope.userinfo,function(){
			$location.path('/login');
		});
	};
}])
.controller('managerCtrl',['$scope','$resource',function($scope,$resource){
	var manager_scope=$resource('/manager');
	manager_scope.query(function(mod){
		$scope.mod=mod;
	});
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.font="35px Verdana";
	var gradient=ctx.createLinearGradient(0,0,c.width,0);
	gradient.addColorStop("0","#000");
	gradient.addColorStop("0.5","#fff");
	gradient.addColorStop("1.0","#D0D0D0");
	// Fill with gradient
	ctx.fillStyle=gradient;
	ctx.fillText("用户管理界面",10,90);
}])
.controller('managerformCtrl', ['$scope', '$resource', '$location', '$stateParams', function($scope, $resource, $location, $stateParams){ 
	var Doc = $resource('/manager/:id', 
		{ id: '@_id'}, 
		{ update: { method: 'PUT' }
	});
	Doc.get({id: $stateParams.id}, 
	function(one){ 
		$scope.one = one; 
		//console.log(Doc);
	}); 
	$scope.saveEdit = function(){ 
		Doc.update($scope.one, function(){ 
			$location.path('/manager'); 
		}); 
	}; 
	$scope.exit=function(){
		$location.path('/manager');
	}
}])
.controller('deleteCtrl',['$scope','$resource','$location','$stateParams',function($scope,$resource,$location,$stateParams){
	var Doc=$resource('/manager/:id',
		{id:'@_id'},
		{update:{method:'PUT'}
	});
	Doc.get({id:$stateParams.id},
		function(one){
			$scope.one=one;
		});
	$scope.delete=function(){
		Doc.delete({id:$stateParams.id},function(){
			$location.path('/manager');
		});
	}
}])
.controller('homeCtrl',['$scope','$resource',function($scope,$resource){
	var home_scope=$resource('/home');
}]);