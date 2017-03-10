angular.module('starter').service('ProductosService', ProductosService);

ProductosService.$inject = ['$http', '$q'];

function ProductosService($http, $q){

    return {
        lista: lista
    };

    function lista() {
        return $http.get('comprar/productos.json')
        .then(function(response) {
            return response.data.productos;
        })
        .catch(function(error){
            $q.reject();
        });
    }
    
}