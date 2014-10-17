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