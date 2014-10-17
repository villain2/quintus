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