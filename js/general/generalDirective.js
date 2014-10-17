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