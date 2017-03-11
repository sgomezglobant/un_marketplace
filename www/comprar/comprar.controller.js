// comprar.controller.js
angular.module('starter').controller('ComprarCtrl', ComprarCtrl);

ComprarCtrl.$inject = ['$scope', 'ProductosService'];

function ComprarCtrl($scope, ProductosService) {
    var vm = this;
    ProductosService.lista().then(function (productos) {
        vm.productos = productos;
    });
}

