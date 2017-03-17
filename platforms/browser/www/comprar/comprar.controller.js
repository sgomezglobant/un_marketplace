// comprar.controller.js
angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', 'ProductosService'];

function ComprarCtrl($scope, ProductosService) {
    var vm = this;
    ProductosService.lista().then(function (productos) {
        vm.productos = chunk(productos, 2);
    });


    // Esta función recibe un array y crea combinaciones de filas y
    // columnas para crear subarrays dentro del arrar.
    // i.e chunk([1,3,4,5,6,7], 2) = [[1, 3], [4, 5], [6, 7]]
    function chunk(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    }
}

