angular
    .module('app')
    .factory('Api', factory);

factory.$inject = ['$http'];

function factory($http) {
    return {
        getUsernames: getUsernames,
        getUser: getUser,
    }

    // Users
    function getUsernames () {
        return $http.get('/usernames');
    }
    function getUser(id) {

    }
}