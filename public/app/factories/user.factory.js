angular
    .module('app')
    .factory('UserApi', factory);

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
    function getUser(username, password) {
        return $http.get('/user');
    }
}