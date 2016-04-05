// MAIN CONTROLLER
function j1Controller($scope, $http, j1Service) {
	$scope.title = "Todo List";

	function load(){
		j1Service.get().then(function(res){
			$scope.j1s = res.data;
		});
	}
	$scope.confirm = function(){
		$scope.word =[];
		$scope.word = $scope.description.split('');
		console.log($scope.word);

	}

	$scope.add = function(){
		var data = {};
		data.word = $scope.word;
		j1Service.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(j1){
		j1Service.update(j1._id, j1).then(function(res){
			load();
		});
	}
	$scope.delete = function(j1){
		j1Service.delete(j1._id).then(function(res){
			load();
		});
	}
	load();
}
