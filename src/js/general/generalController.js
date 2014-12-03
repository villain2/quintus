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