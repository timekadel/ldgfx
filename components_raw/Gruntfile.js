'use-strict'

module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                //Concatenate all of the files in the jsResources configuration property
                src: [ './*/*.js' ],
                dest: '../components_concat/ldgfx.concat.latest.js',
                options: {
                    separator: ';'
                }
            },

            css: {
                //Concatenate all of the files in the cssResources configuration property
                src: [ './*/*.css' ],
                dest: '../components_concat/ldgfx.concat.latest.css',
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};