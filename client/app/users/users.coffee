'use strict'

angular.module 'myappApp'
.config ($stateProvider) ->
  $stateProvider.state 'users',
    url: '/users'
    templateUrl: 'app/users/users.html'
    controller: 'UsersCtrl'
