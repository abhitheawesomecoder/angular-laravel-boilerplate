app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'app/tpl/home.html',
            controller: 'homeCtrl'
        })
        .state('test', {
            url:'/test',
            templateUrl: 'app/tpl/test.html',
            controller: 'testCtrl'
        })
 
}]);