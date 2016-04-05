// MAIN CONTROLLER
function j2Controller($scope, $http, j2Service, j1Service) {
	$scope.title = "Todo List";
	$scope.words =[];
	$scope.chosenword =[];
	$scope.lettersgood =[];
	$scope.letters =[];
	$scope.letterscorrects =[];
	$scope.lettersincorrects =[];
	$scope.alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	$scope.count = 1;

	function load(){
		j2Service.get().then(function(res){
			$scope.j2s = res.data;
		});

		j1Service.get().then(function(res){
			$scope.j1s = res.data;
			for (var i = 0; i < $scope.j1s.length ; i++){
				$scope.words.push($scope.j1s[i].word);
			}
		});

	}

	$scope.check = function(letter){
		if($scope.letters.indexOf(letter) != -1 ){
			$scope.letterscorrects.push(letter);

			return true;



		}
		else{
			$scope.lettersincorrects.push(letter);
		return false;
	}
	};
	$scope.choose = function(word){
		$scope.chosenword =[];
		$scope.chosenword = word;
		console.log($scope.chosenword);

	};

	$scope.put = function(letter){
		$scope.letters.push(letter);
		var x = $scope.alphabet.indexOf(letter);
		$scope.alphabet.splice(x,1);
		console.log($scope.letters);

	};



	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		j2Service.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(j2){
		j2Service.update(j2._id, j2).then(function(res){
			load();
		});
	}
	$scope.delete = function(j2){
		j2Service.delete(j2._id).then(function(res){
			load();
		});
	}
	load();
}
