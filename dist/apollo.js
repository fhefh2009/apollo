/*!
 *  Apollo v1.2.1
 *  Standalone class manipulation API for HTML5 and legacy DOM
 *  Project: https://github.com/toddmotto/apollo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */
window.Apollo = (function (window, document, undefined) {

  'use strict';

  var classList = document.documentElement.classList;

  var apollo = {
    hasClass: function (elem, className) {
      if (classList) {
        return elem.classList.contains(className);
      } else {
        return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
      }
    },
    addClass: function (elem, className) {
      if (classList) {
        elem.classList.add(className);
      } else {
        if (!apollo.hasClass(elem, className)) {
          elem.className += (elem.className ? ' ' : '') + className;
        }
      }
    },
    removeClass: function (elem, className) {
      if (classList) {
        elem.classList.remove(className);
      } else {
        if (apollo.hasClass(elem, className)) {
          elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
        }
      }
    },
    toggleClass: function (elem, className) {
      if (classList) {
        elem.classList.toggle(className);
      } else {
        var toggle = apollo.hasClass(elem, className) ? apollo.removeClass : apollo.addClass;
        toggle(elem, className);
      }
    }
  };

  return apollo;

})(window, document);
