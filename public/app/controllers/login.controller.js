angular
    .module('app')
    .controller('LoginCtrl', controller);

controller.$inject = ['UserApi'];

function controller(UserApi) {
    
    var vm = this;

    UserApi.logIn(vm.u, vm.p)
        .then(function success(response) {
            
        }, function error(response) {

        }).finally(function(){

        });

    UserApi.getUsernames()
        .then(function success(response) {
            vm.usernames = response.data;
            //session data = response.data? Here or on the backend?
        }, function error(response) {
            console.log(response);
        }).finally(function() {
            //
        });
}