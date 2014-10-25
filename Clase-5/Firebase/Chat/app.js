var origamiFire = angular.module("origamiFire", ["firebase"]);

//Controlador
origamiFire.controller('FireBaseOrigami', ['$scope', '$firebase',
  function($scope, $firebase) {

    //Referencia a la instancia en firebase
    var ref = new Firebase("https://origamiacademy.firebaseio.com/");

    // Obtenemos mensajes como un array (3-way data binding)
    $scope.messages = $firebase(ref).$asArray();

    //Funcion para agregar un nuevo mensaje
    $scope.addMessage = function(e) {

      //Si el usuario le da a "Enter"
      if (e.keyCode === 13 && $scope.msg) {

        //Guarda el nombre o bien, seria anonimo
        var name = $scope.name || 'Origami Anonimo';

        //Lo agrega a firebase
        $scope.messages.$add({
          from: name,
          body: $scope.msg
        });

        //Limpia el textfield
        $scope.msg = "";
      }
    }
  }
]);