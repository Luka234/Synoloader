module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    moz: true
                }
            }

        },
        jsbeautifier: {
            files: ['Gruntfile.js', 'src/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');



    grunt.registerTask('default', ['jsbeautifier', 'jshint']);

};
