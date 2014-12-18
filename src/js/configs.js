(function (Configs, undefined){
    TestGame.Modules.TestGame.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            controller: "GeneralCtrl"
        })
        .otherwise({
            redirectTo: '/'
        })
    }]);
} ( TestGame.Configs = TestGame.Configs || {} ));