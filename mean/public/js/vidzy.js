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
				templateUrl:'partials/login.html',
				controller:'loginCtrl'
			}
		}
	})
	.state('register',{
		url:'/register',
		views:{
			'':{
				templateUrl:'partials/register.html',
				controller:'registerCtrl'
			}
		}
	})
	.state('home',{
		url:'/home',
		views:{
			'':{
				templateUrl:'partials/home.html',
				controller:'homeCtrl'
			}
		}
	})
	.state('manager',{
		url:'/manager',
		views:{
			'':{
				templateUrl:'partials/manager.html',
				controller:'managerCtrl'
			}
		}
	})
	.state('managerEdit',{
		url:'/managerEdit/:id',
		views:{
			'':{
				templateUrl:'partials/manager-form.html',
				controller:'managerformCtrl'
			}
		}
	})
	.state('managerDelete',{
		url:'/managerDelete/:id',
		views:{
			'':{
				templateUrl:'partials/manager-delete.html',
				controller:'deleteCtrl'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
}]);
