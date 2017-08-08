angular
    .module('app')
    .controller('TestController', controller);

controller.$inject = ['Api'];

function controller(Api) {
    
    var vm = this;

    Api.getUsernames()
        .then(function success(response) {
            vm.usernames = response.data;
        }, function error(response) {
            console.log(response);
        }).finally(function() {
            //
        });
}