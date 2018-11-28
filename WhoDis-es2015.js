/**
* WhoDis.js
* A simple little sniffer. Mostly Using UA (Yikes! 😜)
* for conditional checks. Mostly for mobile and IE checks.
* es2015 version
*/
var WhoDis = (function() {

  var ua = navigator.userAgent;

  return {

    Android: function() {
      return ua.match(/Android/i)
    },
    BlackBerry: function() {
      return ua.match(/BlackBerry/i)
    },
    Chrome: function() {
      return ua.match(/Chrome/i)
    },
    Edge: function() {
      return ua.match(/Edge/i)
    },
    Firefox: function() {
      return ua.match(/Firefox/i)
    },
    IE: function() {
      return ua.match(/Trident/i)
    },
    IEMobile: function() {
      return ua.match(/IEMobile/i)
    },
    IE10: function() {
      return ua.match(/MSIE/i)
    },
    iOS: function() {
      return ua.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
      return ua.match(/OPR/i)
    },
    OperaMini: function() {
      return ua.match(/Opera Mini/i)
    },
    Safari: function() {
      return !!ua.match(/Version\/[\d\.]+.*Safari/)
    },
    Touch: function() {
      return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
    },

    /**
     * Any Microsoft
     */
    anyMS: function() {
      return (
        WhoDis.IE10() ||
        WhoDis.IE()   ||
        WhoDis.Edge()
      );
    },

    /**
     * Any Mobile
     */
    anyMobile: function() {
      return (
        WhoDis.Android()    ||
        WhoDis.BlackBerry() ||
        WhoDis.iOS()        ||
        WhoDis.OperaMini()  ||
        WhoDis.IEMobile()
      );
    }
  };
})();
