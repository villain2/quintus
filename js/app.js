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