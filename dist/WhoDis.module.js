var n=function(){if("undefined"!=typeof navigator){var i=navigator.userAgent;return{info:i,Android:function(){return i.match(/Android/i)},BlackBerry:function(){return i.match(/BlackBerry/i)},Chrome:function(){return i.match(/Chrome/i)},Edge:function(){return i.match(/Edge/i)},Firefox:function(){return i.match(/Firefox/i)},IE:function(){return i.match(/Trident/i)},IEMobile:function(){return i.match(/IEMobile/i)},IE10:function(){return i.match(/MSIE/i)},iOS:function(){return i.match(/iPhone|iPad|iPod/i)},Opera:function(){return i.match(/Opera Mini/i)},OperaMini:function(){return i.match(/Opera Mini/i)},Safari:function(){return!!i.match(/Version\/[\d\.]+.*Safari/)},Touch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},anyMS:function(){return n.IE10()||n.IE()||n.Edge()},anyMobile:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.OperaMini()||n.IEMobile()}}}}();export default n;
//# sourceMappingURL=WhoDis.module.js.map