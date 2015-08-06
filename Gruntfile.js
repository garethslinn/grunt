module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                css: {
                    'src/css/main.css': 'src/scss/main.scss',
                    'src/css/other.css': 'src/scss/other.scss'
                }
            }
        },
        jshint: {
            js: {
                src: ['src/js/main.js', 'src/js/other.js']
            }
        },
        concat: {
            js: {
                src: ['src/js/main.js', 'src/js/other.js'],
                dest: 'dest/js/min.js'
            },
            css: {
                src: ['src/css/main.css', 'src/css/other.css'],
                dest: 'dest/css/min.css'
            }
        },
        uglify: {
            options: {
                mangleProperties: true,
                reserveDOMCache: true
            },
            js: {
                files: {
                    'dest/js/min.js': ['src/js/main.js', 'src/js/other.js']
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile']
            },
            files: {
                files: ['src/js/*.js', 'src/scss/*.scss'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'jshint', 'concat', 'uglify', 'watch']);

};

