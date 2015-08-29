(function (w, d, $, u) {
  'use strict';

  var $photo_container = $('.photo-container');

  $photo_container.each(function () {
    var textArea = $(this).find('.form-control');
    var saveButton = $(this).find('.btn-main');
    var deleteButton = $(this).find('.btn-transparent');

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

    $(this).on('mouseenter', function () {
      deleteButton.addClass('fadeIn');
      deleteButton.removeClass('fadeOut');
    });

    $(this).on('mouseleave', function () {
      deleteButton.addClass('fadeOut');
      deleteButton.removeClass('fadeIn');
    });
  });

  var elem = d.querySelector('.js-switch');

  if (elem) {
    var init = new Switchery(elem, {size: 'small'});
  }

  $('.show-min').change(function () {
    var $el = $(this).parent().parent().next();
    if (this.checked) {
      $el.show();
    } else {
      $el.hide();
    }
  });

})(window, document, jQuery);