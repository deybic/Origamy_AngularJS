//Angular.js app definition
var app = angular.module('origamy',[ ]);


//Controller definition
app.controller('OrigamyCtrl', ['$scope', function($scope){
    
    $scope.student = {
      name: 'Mariana',
      address: 'Santamaria Street'
    };
    
    
}]);


app.directive('myStudent', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-student.html'
    };
});
