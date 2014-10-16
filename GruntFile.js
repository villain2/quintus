module.exports = function (grunt)
{
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        
        watch: {
            dev: {
                files: ['css/**.scss', 'js/**.js'],
                tasks: ['sass']
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['watch']);
}