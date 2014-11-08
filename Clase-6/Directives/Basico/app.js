//Angular.js app definition
var app = angular.module('origamy',[ ]);


//Controller definition
app.controller('OrigamyCtrl', ['$scope', function($scope){
    
    $scope.message = 'Hola desde alguna directiva!';
    
    
}]);


app.directive('origamiDirective', function() {
    return {
        restrict: 'E',
        template: '<h1>SOY INYECTADO DESDE UN DIRECTIVE</h1>',
        replace: true,
        link: function(scope, elm, attrs) {
            console.log(elm.text());                       
        }
    };
});
