function config($routeProvider) {
	$routeProvider
		.when('/j1', {
			templateUrl: 'views/j1.html',
			controller: 'j1Controller'
		})
		.when('/j2', {
			templateUrl: 'views/j2.html',
			controller: 'j2Controller'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('j1Controller', j1Controller)
		.controller('j2Controller', j2Controller)
    .service('j1Service', j1Service)
		.service('j2Service', j2Service)
    /*.factory('', )*/
    .run(run);
