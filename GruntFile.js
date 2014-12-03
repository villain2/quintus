module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['src/js/app.js', 'src/js/modules.js', 'src/js/configs.js',
                      'src/js/**/*.js'],
				dest: 'src/game/<%= pkg.name %>.js'
			},
            deployJS: {
                src: ['src/game/<%= pkg.name %>.js'],
                dest: 'bin/<%= pkg.name %>.js'
            },
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components//jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js'
				],
				dest: 'src/game/<%= pkg.name %>-deps.js'
			},
            deployDeps: {
              src: 'src/game/<%= pkg.name %>-deps.js',
              dest: 'bin/<%= pkg.name %>-deps.js'
            },
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/resources/css/styles.css'
				],
				dest: 'src/game/<%= pkg.name %>.css'
			},
            deployCSS: {
                src: ['src/game/<%= pkg.name %>.css'],
                dest: 'bin/<%= pkg.name %>.css'
            },
			map: {
				src: ['bower_components/angular-route/angular-route.min.js.map'],
				dest: 'src/game/angular-route.min.js.map'
			},
            deployMap: {
                src: ['src/game/angular-route.min.js.map'],
                dest: 'bin/angular-route.min.js.map'
            }
		},

		sass: {
			dev: {
				files: {
					'src/css/styles.css': 'src/css/styles.scss'
				}
			}
		},
        
        copy: {
            main: {
                expand: true, cwd: 'src/game/', src: '**', dest: 'bin/', filter: 'isFile'
            }
        },

		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:dist']
			},
			styles: {
				files: ['src/css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('dev', 'Build the application', 
		['sass:dev',
		'concat'
		]);
    
    grunt.registerTask('build', 'Build the application',
        ['concat:deployDeps',
         'concat:deployJS',
         'concat:deployCSS',
         'concat:deployMap',
         'copy:main'
    ]);
}