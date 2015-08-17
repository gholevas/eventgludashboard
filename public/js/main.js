'use strict';

var eventsGlue = angular.module('eventsGlue', [
  'eventsGlue.directives'
]);

var directives = angular.module('eventsGlue.directives', []);;'use strict';

angular.module('eventsGlue.directives', [])

  .directive('showBtn', [function () {
    return {
      restrict: 'A',

      link: function (scope, element) {
        var textArea = element.find('.form-control');
        var saveButton = element.find('.btn-main');
        var deleteButton = element.find('.btn-transparent');

        saveButton.addClass('animated');
        deleteButton.addClass('animated');

        textArea.on('focus', function () {
          saveButton.addClass('fadeIn');
          saveButton.removeClass('fadeOut');
        });

        textArea.on('blur', function () {
          saveButton.addClass('fadeOut');
          saveButton.removeClass('fadeIn');
        });

        element.on('mouseenter', function () {
          deleteButton.addClass('fadeIn');
          deleteButton.removeClass('fadeOut');
        });

        element.on('mouseleave', function () {
          deleteButton.addClass('fadeOut');
          deleteButton.removeClass('fadeIn');
        });
      }
    };
  }]);

