tweetApp.controller('tweetController', function($scope, $http, $location){
	// $scope.test = "I am working!";
	// $scope.tweets = tweets;
	console.log($location);
	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=Rio2016'
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			console.log(tweetData.data.statuses);
		}, function failureFunction(tweetData){
			console.log(tweetData);
		}
	)
	
});//Controller Closed

