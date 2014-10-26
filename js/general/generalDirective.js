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
                    var Q = window.Q = Quintus().include("Sprites, Scenes, Input, 2D, Touch, UI").setup({ width: 1388, scaleToFit: true}).controls().touch();
                    
                    
                    
                    /**
                     * @ngdoc method 
                     * @name TestGame#loadAssets
                     * @description
                     *
                     * Load the assets to the stage using Quintus.
                    **/
                    function loadAssets()
                    {
                        
                        Q.Sprite.extend("Player", {
                            init: function (p) {
                                this._super(p, { asset: "player.png", x: 110, y: 50, jumpSpeed: -380});
                                this.add('2d, platformerControls');
                            },
                            step: function (dt)
                            {
                                if(Q.inputs['left'] && this.p.direction == 'right') {
                                    this.p.flip = 'x';
                                }
                                if(Q.inputs['right'] && this.p.direction == 'left') {
                                    this.p.flip = false;
                                }
                            }
                        });
                        
                        
                        Q.scene("level1", function (stage) {
                            var background = new Q.TileLayer({ dataAsset: 'level1.tmx', layerIndex: 0, sheet: 'tiles', tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
                            stage.insert(background);
                            stage.collisionLayer(new Q.TileLayer({ dataAsset: 'level1.tmx', layerIndex:1,  sheet: 'tiles', tileW: 70, tileH: 70 }));    
                        
                            var player = stage.insert(new Q.Player());
                            stage.add("viewport").follow(player, { x: true, y: true}, {minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
                        });
                        
                        Q.load("tiles_map.png, player.png, level1.tmx", function () {
                            Q.sheet("tiles", "tiles_map.png", { tilew: 70, tileh: 70});
                            Q.stageScene("level1");
                        });
                    }
                    
                    /*Q.MovingSprite.extend("Ball", {
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
                    });*/
                    
                    loadAssets();
                    
                });
            }
        }
    }]);
} (TestGame.Directives = TestGame.Directives || {} ));