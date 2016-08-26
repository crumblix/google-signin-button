/**
 * Created by Will on 8/26/2016.
 */
module.exports = function(grunt)    {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['**/*.sass'],
                        dest: 'css/',
                        ext: '.css',
                        extDot: 'first'
                    }
                ]
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'sass',
        'cssmin'
    ]);
};