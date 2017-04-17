angular.module('starter').service('ProductosService', ProductosService);

ProductosService.$inject = ['$http', '$q', '$firebaseArray', '$firebaseObject'];

function ProductosService($http, $q, $firebaseArray, $firebaseObject){

    return {
        lista: lista
    };

    function lista() {
        var productsRef = firebase.database().ref().child('productos');
        return $firebaseArray(productsRef).$loaded();
    }
    
};

