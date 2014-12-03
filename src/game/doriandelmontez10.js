/**
 * @ngdoc function 
 * @name TestGame
 * @description
 *
 * Baseline objects and variables for Quintus Test Game App.
**/

(function (TestGame, undefined)
{
    TestGame.Version            = "1.0.0";
    TestGame.Factory            = {};
    TestGame.Services           = {};
    TestGame.Modules            = {};
    TestGame.Configs            = {};
    TestGame.Controllers        = {};
    TestGame.Directives         = {};
} (window.TestGame = window.TestGame || {} ));

/*(function (Configs, undefined)
 {
    TestGame.Modules.TestGame.config([function (){
    }]);
} ( TestGame.Configs = TestGame.Configs || {} ));*/

/**
 * @author K.C. Hunter
 *
**/
(function (Modules, undefined)
{

    /**
     * @ngdoc module
     * @id TestGame
     * @name TestGame
     * @description
     *
     * This Module Initializes the thegame Angular module. Uses the static angular
     * extern. This is a generic function used by the base template. Only modify if
     * updating or adding functionality to the default template. All angular template
     * controllers, directives, services and filters go here. See Angular
     * documentation for usage.
     */
    Modules.TestGame = angular.module('thegame', ['ngRoute']);
}(TestGame.Modules = TestGame.Modules || {} ));

/**
 *
**/
(function (Controllers, undefined)
{
    TestGame.Modules.TestGame.controller('GeneralCtrl', ['$scope', '$location', function ($scope, $location){
        var scope           = $scope;
        scope.location      = $location;
    }])
}(TestGame.Controllers = TestGame.Controllers || {} ));