let app = angular.module('hajokApp', []);
app.controller('hajokController', function($scope, $http){
    $scope.hajokLista = [];

    $http.get('hajok.json')
    .then(function(response){
        $scope.hajokLista = response.data;
        console.log($scope.hajok);
    })
    .catch(function(error){
        console.error("Error fetching data:", error)
    });
});