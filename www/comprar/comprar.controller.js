// comprar.controller.js
angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', 'ProductosService'];

function ComprarCtrl($scope, ProductosService) {
    ProductosService.lista().then(function (productos) {
        console.log(productos);
    });
}