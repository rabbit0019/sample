angular.module('myApp', [])

.controller('namesCtrl', function($scope) { 
    $scope.message="Welcome to angular";
})

.controller('myOwnCtrl',function ($scope, $timeout) {
	$scope.DateToday="Loading Clock";
	$scope.tickInterval=1000

	var tick = function(){
		$scope.DateToday = new Date();
		$timeout(tick, $scope.tickInterval);
	}
	$timeout(tick,$scope.tickInterval);
})

.controller('addingHardCode',function($scope){
	$scope.a=5;
	$scope.b=6;
})

.controller('addingInputedValue',function($scope){
	$scope.period=".";
})