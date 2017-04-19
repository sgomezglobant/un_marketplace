angular.module('starter').service('ProductosService', ProductosService);

ProductosService.$inject = ['$http', '$q', '$firebaseArray', '$firebaseObject'];

function ProductosService($http, $q, $firebaseArray, $firebaseObject){

    return {
        lista: lista,
        comprar: comprar
    };

    function lista() {
        var productsRef = firebase.database().ref().child('productos');
        return $firebaseArray(productsRef).$loaded();
    }

    function comprar(userId, productId) {
        var comprasRef = firebase.database().ref('/compras/');
        return $firebaseArray(comprasRef).$add({usuario: userId, producto: productId});
    }
    
};

