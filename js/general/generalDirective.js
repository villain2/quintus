(function (Directives, undefined)
 {
    /**
     * @ngdoc directive
     * @name TestGame:start
     * @element ANY
     * @restrict A
     * @description
     *
     * Start the application with an intro screen.
    **/
    TestGame.Modules.TestGame.directive('startgame', [ function (){
        return {
            restrict: 'A',
            transclude: true,
            link: function (scope, elm, attrs)
            {
                console.log('start game');
                window.addEventListener("load", function ()
                {
                   var Q                  = Quintus().setup();
                    Q.Class.extend('DDClass', {
                        init: function (){
                            console.log('my class instance created');
                        },
                        doIt: function ()
                        {
                            console.log('Doing It!!!');
                        }
                    });
                    
                    var myInstance = new Q.DDClass();
                    console.log(myInstance.className);
                    console.log(myInstance instanceof Q.Class);
                    console.log(myInstance instanceof Q.DDClass);
                    
                });
            }
        }
    }]);
} (TestGame.Directives = TestGame.Directives || {} ));