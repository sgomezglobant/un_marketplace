angular.module('starter')
.factory('servicioCuenta', function($firebaseAuth, $ionicLoading) {
  var config = {
    apiKey: "AIzaSyDE7EXIiDL1UEPC7AbgID2sJyDbOn0aXA4",
    authDomain: "my-market-place-2859e.firebaseapp.com",
    databaseURL: "https://my-market-place-2859e.firebaseio.com",
    projectId: "my-market-place-2859e",
    storageBucket: "my-market-place-2859e.appspot.com",
    messagingSenderId: "263460523046"
  };
  var usuarioActual = null;

  firebase.initializeApp(config);
  var auth = $firebaseAuth();
  return {
    registrar: function (user) {
     return  auth.$createUserWithEmailAndPassword(user.email, user.password);
    },
    iniciar_sesion : function(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {
          console.log(user);
          usuarioActual = user;
      });
    },
    usuarioActual : function () {
      return usuarioActual;
    }
  };
});

