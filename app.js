(function functionName() {
'use strict'; //wymusza koniecznośc deklarowania (typowania) zmiennych

angular.module('myapp', [])

.controller("Mycontroller",function($http,$rootScope){
  $http.get("nbp_data.json").
  then(function(response){
    $rootScope.myWelcome = response.data;
  });
});

})();
//http://api.nbp.pl/api/exchangerates/tables/a/?format=json
