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
    window.addEventListener('load', function () {
        TestGame.Q = Quintus().setup();
    });
} (window.TestGame = window.TestGame || {} ));

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

(function (Configs, undefined)
 {
    TestGame.Modules.TestGame.config([function (){
    }]);
} ( TestGame.Configs = TestGame.Configs || {} ));

(function (Controllers, undefined)
{
    /**
     * @ngdoc controller
     * @name TestGame.controller:GeneralCtrl
     * @description
     *
     * Handle the start page for the game. Should display the splash page and general layout.
    **/
    TestGame.Modules.TestGame.controller('GeneralCtrl', ['$scope', '$element', '$rootScope', '$compile', function (
    $scope, $element, $rootScope, $compile){

    }]);
}( TestGame.Controller = TestGame.Controller || {} ));

(function (Directives, undefined)
 {
    /**
     * @ngdoc directive
     * @name TestGame.directive:login
     * @element ANY
     * @restrict A
     * @description
     *
     * This directive controls all DOM manipulation for the login screen of TestGame.
    **/
    TestGame.Modules.TestGame.directive('startgame', [ function (){
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, elm, attrs)
            {
                console.log('start game');
                window.addEventListener('load', function () {
                    var Q = window.Q = Quintus().include("Sprites").setup({
                        width: 400,
                        height: 400
                    });
                    
                    Q.MovingSprite.extend("Ball", {
                       draw: function (ctx) {
                           ctx.fillStyle = "black";
                           ctx.beginPath();
                           ctx.arc(-this.p.cx,
                                  -this.p.cy,
                                  this.p.w/2, 0, Math.PI*2);
                           ctx.fill();
                       } 
                    });
                    
                    var ball = window.ball = new Q.Ball({
                        w: 20, h: 20, x: 30, y: 300,
                        vx: 30, vy: -100, ax: 0, ay: 30
                    });
                    
                    Q.gameLoop( function (dt) {
                        Q.clear();
                        ball.update(dt);
                        ball.render(Q.ctx);
                    });
                    
                });
            }
        }
    }]);
} (TestGame.Directives = TestGame.Directives || {} ));

(function (Controllers, undefined)
{
    /**
     * @ngdoc controller
     * @name TestGame.controller:WeaponsCtrl
     * @description
     *
     * Handle the start page for the game. Should display the splash page and general layout.
    **/
    TestGame.Modules.TestGame.controller('WeaponsCtrl', ['$scope', '$element', '$rootScope', '$compile', function (
    $scope, $element, $rootScope, $compile) {

    }]);
}( TestGame.Controller = TestGame.Controller || {} ));

(function (Directtives,undefined) {
    
    /**
     * @ngdoc directive
     * @name TestGame.directive:weapons
     * @element ANY
     * @restrict A
     * @description
     *
     * This directive controls all DOM manipulation for the login screen of TestGame.
    **/
    TestGame.Modules.TestGame.directive('weapons', [ '$timeout', function ($timeout){
        return {
            restrict: 'A',
            transclude: true,
            link: function (scope, elm, attrs)
            {
                $timeout(function () {
                    console.log('load weapons');
                    
                }, 300);
            },
            controller: 'WeaponsCtrl'
        }
    }]);
}(TestGame.Directives = TestGame.Directives || {} ));