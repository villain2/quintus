module.exports = function (grunt)
{
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: [
                    'js/app.js', 'js/modules.js', 'js/configs.js',
                    'js/general/*.js', 'js/weapons/*.js'
                ],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        
        watch: {
            dev: {
                files: ['js/**/*.js'],
                tasks: ['sass', 'concat'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['css/*.scss'],
                tasks: ['sass']
            }
        },
        
        ngdocs: {
            all: ['js/**/*.js']
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngdocs');
    
    grunt.registerTask('default', ['watch']);
}