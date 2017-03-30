angular.module('pokeFinder', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/home.html"
            })
            .state('pokemon',{
                url:'/pokemon',
                parent:'home',
                templateUrl: "../views/about-pokemon.html"
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html"
            })
            .state('starters',{
                url:'/starters',
                templateUrl: "../views/starters.html",
                controller: 'startersCtrl',
                controllerAs: 'vm'
            })
            .state('caught',{
                url:'/caught/:id',
                templateUrl: "../views/caught.html",
                controller: 'caughtCtrl',
                controllerAs: 'vm'
            })
            .state('routes',{
                url:'/routes',
                templateUrl: "../views/pokemon-routes.html",
                controller: 'routesCtrl',
                controllerAs: 'vm'
            })
            .state('types',{
                url:'/types',
                templateUrl: "../views/types.html",
              });

        $urlRouterProvider
            .otherwise('/');
    });
