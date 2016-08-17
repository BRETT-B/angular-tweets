// Initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

// tweetApp.directive('customMenu', function(){
// 	return {
// 		restrict: 'E', //E = Element, A = attribute, C = Class, M = Comment
// 		templateUrl: "views/menu.html"
// 	}
// });

// tweetApp.config(function($routeProvider){
// 	//At / load up home.html, with home controller	
// 	$routeProvider.when('/',{
// 		templateUrl: 'views/home.html',
// 		controller: 'homeController'
// 	});
// 	//At /trump, load up the same template, but new controller
// 	$routeProvider.when('/trump',{
// 		templateUrl: 'views/home.html',
// 		controller: 'trumpController'
// 	});
// 	//At /hillary, load up the same template, but new controller
// 	$routeProvider.when('/hillary',{ 
// 		templateUrl: 'views/home.html',
// 		controller: 'hillaryController'
// 	});
// 	$routeProvider.when('/:other',{
// 		templateUrl: 'views/home.html',
// 		controller: 'trumpController'

// 	})
// 	$routeProvider.otherwise('/'); //Default

// });
