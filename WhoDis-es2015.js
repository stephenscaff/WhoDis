/**
* WhoDis.js
* A simple little sniffer using UserAgent,
* for conditional checks. Mostly for mobile and IE checks.
* es2015 version
*/
var WhoDis = (function() {

  var ua = navigator.userAgent;

  return {

    Android: function() {
      return ua.match(/Android/i);
    },
    BlackBerry: function() {
      return ua.match(/BlackBerry/i);
    },
    iOS: function() {
      return ua.match(/iPhone|iPad|iPod/i);
    },
    OperaMini: function() {
      return ua.match(/Opera Mini/i);
    },
    IEMobile: function() {
      return ua.match(/IEMobile/i);
    },
    Edge: function() {
      return ua.match(/Edge/i)
    },
    IE: function() {
      return ua.match(/Trident/i)
    },
    IE10: function() {
      return ua.match(/MSIE/i)
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
