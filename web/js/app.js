angular.module('highmountain', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: "../views/home.html"
            })
            .state('about',{
                url:'/about',
                templateUrl: "../views/about.html"
            })
            .state('services',{
                url:'/services',
                templateUrl: "../views/services.html"
            })
            .state('ownership',{
                url:'/ownership',
                templateUrl: "../views/ownership.html",
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html",
            });

        $urlRouterProvider
            .otherwise('/home');
    });
