//Angular.js app definition
var app = angular.module('origamy',[ ]);


app.filter('hacerMayusculo', function () {
  return function (item) {
    return item.toUpperCase();
  };
});

//Controller definition
app.controller('OrigamyCtrl', ['$scope', function($scope){
    

}]);