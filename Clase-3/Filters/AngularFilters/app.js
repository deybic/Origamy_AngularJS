//Angular.js app definition
var app = angular.module('origamy',[ ]);


//Controller definition
app.controller('OrigamyCtrl', ['$scope', function($scope){
    

    //Studens for the repeater 
    $scope.students = [
        {
            "name"      :"Estudiante 1", 
            "id"        :"1-0766-3322",
            "school"    :"San Antonio School",
            "address"   : "San Isidro de Alajuela"
        },             
        {
            "name"      :"Estudiante 2", 
            "id"        :"1-0766-4554",
            "school"    :"San Antonio School",
            "address"   : "San Isidro de Heredia"
        },
        {
            "name"      :"Estudiante 3", 
            "id"        :"1-0766-0986",
            "school"    :"Saint Paulas School",
            "address"   : "San Isidro de General"
        },
        {
            "name"      :"Estudiante 4", 
            "id"        :"1-4345-3322",
            "school"    :"San Andres School",
            "address"   : "San Isidro de Coronado"
        }
    ];
    
}]);