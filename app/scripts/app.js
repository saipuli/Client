﻿'use strict';
angular.module('todoApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/Views/TodoList.html",
        requireADLogin: true,
    }).when("/ToGoList", {
        controller: "toGoListCtrl",
        templateUrl: "/Views/ToGoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {

        // Map the location of a request to an API to a the identifier of the associated resource
        "https://trafficactivitylog.azurewebsites.net": "https://trafficactivitylog.azurewebsites.net",
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'samtec.onmicrosoft.com',
            clientId: '55480ecd-5be4-40bc-b1ce-8ff6504a0503',
            // clientId: 'bee95193-089c-4801-bec9-f4fbb9c7efaa',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints,
            // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            // Also, token acquisition for the To Go API will fail in IE when running on localhost, due to IE security restrictions.
        },
        $httpProvider
        );

}]);
