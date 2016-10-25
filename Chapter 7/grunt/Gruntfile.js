module.exports = function(grunt) {
    //Grunt configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'development',
                    httpGeneratedImagesPath: ' images'
                }
            }
        }
    });

    //Load Grunt tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
};