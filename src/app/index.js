'use strict';

angular.module('uvpBuilderWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('builder', {
        url: '/builder',
        template: '<p>AAAAAAAA</p>'
        //controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
