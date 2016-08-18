tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){
	console.log($scope.test);

	// console.log($location.hash());
	console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		var searchTerm = 'trump';
	}

	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash='+searchTerm
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});	
	

});
