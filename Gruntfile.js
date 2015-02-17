module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true
          }
        },
        src: ['Gruntfile.js', './lib/delete.js', './lib/get.js', './lib/patch.js', './lib/post.js', './lib/put.js', './lib/getRouter.js',
        '/test/testDelete.js', './test/testPatch.js', './test/testPut.js', './test/testPost.js', './test/testGet.js']
      }
    },
    jscs: {
      all: {
        options: {
          "preset": "google"
        },
        files: {
          src: ['Gruntfile.js', './lib/delete.js', './lib/get.js', './lib/patch.js', './lib/post.js', './lib/put.js', './lib/getRouter.js',
        '/test/testDelete.js', './test/testPatch.js', './test/testPut.js', './test/testPost.js', './test/testGet.js'] 
        }
      }
    },
    simplemocha: {
      all: {
        src: ['./test/test.js']
      }
    },
    watch: {
        scripts: {
        files: ['Gruntfile.js', './lib/delete.js', './lib/get.js', './lib/patch.js', './lib/post.js', './lib/put.js', './lib/getRouter.js',
        '/test/testDelete.js', './test/testPatch.js', './test/testPut.js', './test/testPost.js', './test/testGet.js'],
        tasks: ['jshint', 'jscs', 'simplemocha'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha', 'watch']);
  grunt.registerTask('default', ['test']);
};