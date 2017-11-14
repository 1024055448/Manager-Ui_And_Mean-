var app=angular.module('Vidzy',['ngResource','ui.router','myAppCtrl']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
 	$stateProvider
	.state('index',{
		url:'/',
		views:{
			'':{
				templateUrl:'partials/index.html',
				controller:'indexCtrl'
			}
		}
	})
	.state('login',{
		url:'/login',
		views:{
			'':{
				templateUrl:'partials/login.html'
			}
		}
	})
	.state('register',{
		url:'/register',
		views:{
			'':{
				templateUrl:'partials/register.html'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
}]);
