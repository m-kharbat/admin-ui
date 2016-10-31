angular.module('app', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'common']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('overview', {
            url: '/',
            template: ''
        })
        .state('console', {
            url: '/',
            template: ''
        })
        .state('tutorial', {
            url: '/',
            template: ''
        })
        .state('tables', {
            url: '/',
            template: ''
        })
        .state('cluster', {
            url: '/',
            template: ''
        });
    /* Add New States Above */
    $urlRouterProvider.otherwise("/");

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

