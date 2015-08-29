module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["public/styles"]
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less",
          "public/styles/fonts.css": "public/less/fonts.less"
        }
      },
      production: {
        options: {
          paths: ["public/styles"],
          cleancss: true
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less",
          "public/styles/fonts.css": "public/less/fonts.less"
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/styles/libs.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/font-awesome/css/font-awesome.min.css',
            'bower_components/animate.css/animate.css',
            'bower_components/switchery/dist/switchery.css',
            'public/styles/lib/tipped.css'
          ],
          'public/styles/styles.min.css': [
            'public/styles/fonts.css',
            'public/styles/styles.css'
          ]
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/switchery/dist/switchery.js',
          'public/js/lib/tipped.js'
        ],
        dest: 'public/js/concat/libs.js'
      },
      my_js: {
        src: [
          'public/js/custom/*.js'
        ],
        dest: 'public/js/concat/main.js'
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/min/libs.min.js': 'public/js/concat/libs.js'
        }
      },
      scripts: {
        files: {
          'public/js/min/main.min.js': 'public/js/concat/main.js'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/less/*.less'],
        tasks: ['less', 'cssmin']
      },
      scripts: {
        files: ['public/js/custom/*.js'],
        tasks: ['concat:my_js', 'uglify:scripts']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'concat']);
};