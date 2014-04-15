//process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;

module.exports = function(grunt) {
    grunt.initConfig({
        run: {
            'browserify-libs': {
                exec: (function() {
                    var requires =  ' ' +
                                    '-r angular ' +
                                    '-r angular-route ' +
                                    '-r d3 ' +
                                    '-r nvd3 ' +
                                    ' ';

                    return 'browserify' + requires + '> ./public/js/built/libs.js';
                })()
            },
            'browserify-app': {
                exec: (function() {
                    var externals =     ' ' +
                                        '-x angular ' +
                                        '-x angular-route ' +
                                        '-x d3 ' +
                                        '-x nvd3' +
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