/**
 * WhoDis.js
 * A simple little sniffer using UserAgent,
 * for conditional checks. Mostly for mobile and IE checks.
 */
const WhoDis = (() => {

  let ua = navigator.userAgent;

  return {

    Android() {
      return ua.match(/Android/i);
    },
    BlackBerry() {
      return ua.match(/BlackBerry/i);
    },
    iOS() {
      return ua.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
      return ua.match(/Opera Mini/i);
    },
    IEMobile() {
      return ua.match(/IEMobile/i);
    },
    Edge() {
      return ua.match(/Edge/i)
    },
    IE() {
      return ua.match(/Trident/i)
    },
    IE10() {
      return ua.match(/MSIE/i)
    },

    /**
     * Any Microsoft
     */
    anyMS() {
      return (
        WhoDis.IE10() ||
        WhoDis.IE()   ||
        WhoDis.Edge()
      );
    },

    /**
     * Any Mobile
     */
    anyMobile() {
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

// Export
export default WhoDis;
