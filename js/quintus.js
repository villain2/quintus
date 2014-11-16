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
                window.addEventListener('load', function () {
                    var Q = window.Q = Quintus({development: true})
                                        .include("Sprites, Scenes, Input, 2D, Touch, UI, Anim, TMX")
                                        .setup({ maximize: true
                                               })
                                        .controls().touch();

                    Q.SPRITE_PLAYER = 1;
                    
                    
                    
                    /**
                     * @ngdoc method 
                     * @name TestGame#loadAssets
                     * @description
                     *
                     * Load the assets to the stage using Quintus.
                    **/
                    function loadAssets()
                    {
                        Q.SPRITE_PLAYER = 1;

                        Q.Sprite.extend("Player", {
                            init: function (p) {
                                this._super({ 
                                    sheet: "player",
                                    sprite: "player",
                                    direction: "right",
                                    type: Q.SPRITE_PLAYER,
                                    frame:0, 
                                    x: 120, 
                                    y: 0, 
                                    standingPoints: [ [ 0, 0], [ -0, 0 ], [-0,-0], [0,-0], [0, 0 ], [ 0, 0 ]],
                                    hitPoints: 100,
                                    jumpSpeed: -380,
                                    collisionMask: Q.SPRITE_DEFAULT
                                });

                                this.p.points = this.p.standingPoints;
                                this.add('2d, platformerControls, animation');
                            },
                            step: function (dt)
                            {
                                if(Q.inputs['left'] && this.p.direction == 'right') {
                                    this.p.flip = 'x';
                                }
                                if(Q.inputs['right'] && this.p.direction == 'left') {
                                    this.p.flip = false;
                                }

                                if(this.p.vx > 0)
                                {
                                    console.log('turn right');
                                }

                                if(this.p.vx < 0)
                                {
                                    console.log('turn left');
                                    this.play("walk_left");
                                }

                                if(this.p.vx > 0){
                                    this.play("walk_right");
                                    this.p.direction = "right";
                                }
                                else if(this.p.vx < 0)
                                {
                                    this.play("walk_left");
                                    this.p.direction = "left";
                                }
                            }
                        });
                        /*
                            Q.animations('player2', {
                                walk_right: { frames: [0,1], rate: 1/2},
                                walk_left: { frames: [0,1], rate: [1/2]}
                            });
                        */
                        /*
                        Q.scene("level1", function (stage) {
                            var background = new Q.TileLayer({ dataAsset: 'level1.tmx', layerIndex: 0, sheet: 'tiles', tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
                            stage.insert(background);
                            stage.collisionLayer(new Q.TileLayer({ dataAsset: 'level1.tmx', layerIndex:1,  sheet: 'tiles', tileW: 70, tileH: 70 }));    
                        
                            var player = stage.insert(new Q.Player());
                            stage.add("viewport").follow(player, { x: true, y: true}, {minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
                        });
                        */
                        Q.scene("level1", function (stage) {
                            /*var background = new Q.TileLayer({
                                dataAsset: 'level1.tmx', 
                                layerIndex: 0, 
                                sheet: 'tiles', 
                                tileW: 70, 
                                tileH: 70, 
                                type: Q.SPRITE_NONE
                            });
                            var player = stage.insert(new Q.Player());
                            stage.add("viewport").follow(player, {
                                x: true,
                                y: true
                            },
                            {
                                minX: 0,
                                maxX: 100,//background.p.w, 
                                minY: 0, 
                                maxY: 100//background.p.h
                            });
                            */
                            Q.stageTMX("level1.tmx", stage);
                            var player = stage.insert(new Q.Player());
                            stage.add("viewport").follow(player, {
                                x: true,
                                y: true
                            },
                            {
                                minx: 0,
                                maxX: stage.width,
                                minY: 0,
                                maxY: stage.height
                            });
                        });
                        
                        Q.load("tiles_map.png, player.png, player_full.png, player.json, level1.tmx", function () {
                            Q.sheet("tiles", "tiles_map.png", { tilew: 70, tileh: 70});
                            Q.sheet("player", "player_full.png");
                            Q.compileSheets("player_full.png", "player.json");
                            Q.stageScene("level1");
                        });
                    }
                    
                    loadAssets();
                    
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