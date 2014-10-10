
	var origamiApp = angular.module('origamiApp', ['ngRoute']);

	//Configuramos las rutas mediante el route provider
	origamiApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'partials/inicio.html',
				controller  : 'mainController'
			})

			.when('/origami', {
				templateUrl : 'partials/origami.html',
				controller  : 'origamiController'
			})

			.when('/contacto', {
				templateUrl : 'partials/contacto.html',
				controller  : 'contactoController'
			});
	});

	

	origamiApp.controller('mainController', function($scope) {
		$scope.message = 'Angular.js Rocks!';
	});


	origamiApp.controller('origamiController', function($scope) {
		$scope.message = 'Bievenidos a Origamy.';
	});



	origamiApp.controller('contactoController', function($scope) {
		$scope.message = 'Contacto!';
	});