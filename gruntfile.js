module.exports = function(grunt) {
    grunt.initConfig({
        run: {
            'browserify-libs': {
                exec: (function() {
                    var requires =  ' ' +
                                    '-r angular ' +
                                    '-r angular-route' +
                                    ' ';

                    return 'browserify' + requires + '> ./public/js/built/libs.js';
                })()
            },
            'browserify-app': {
                exec: (function() {
                    var externals =    ' ' +
                                        '-x angular ' +
                                        '-x angular-route' +
                                        ' ';

                    return 'browserify' + externals + './public/js/app.js > ./public/js/built/app.js';
                })()
            }
        }
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-run');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', [
        'run:browserify-libs'
        ,
        'run:browserify-app'
    ]);
};