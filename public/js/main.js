'use strict';

var eventsGlue = angular.module('eventsGlue', [
  'eventsGlue.directives'
]);

var directives = angular.module('eventsGlue.directives', []);;'use strict';

angular.module('eventsGlue.directives', [])

  .directive('activeBg', [function () {
    return {
      restrict: 'A',

      link: function (scope, element) {
        var hasClass = element.parent().hasClass('active');

        if (hasClass)
          element.prepend('<span class="arrow"></span>');
        else
          element.find('.arrow').remove();
      }
    };
  }]);