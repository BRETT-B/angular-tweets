tweetApp.controller('homeController', function($scope, $http, $location, $mdDialog, $mdMedia){
	$scope.homePage = true;
	$scope.$watch(function(){
		return $location.path();
	},
	function(newPath){
		$scope.trump = "";
		$scope.hillary = "";
		$scope.home = "";
		console.log("The path changed. It's now " + newPath);
		if(newPath == "/trump"){
			$scope.trump = "active";
		}else if(newPath == "/hillary"){
			$scope.hillary = "active";
		}else if(newPath == "/"){
			$scope.home = "active";
		}
	}
	);

	$scope.isActive = function(view){
		console.log($location.path);
		return (view === $location.path());
	}

  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Which twitter feed would you like to view?')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Stay Here');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };

});