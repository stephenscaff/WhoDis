# WhoDis.js

Just a simple little userAgent sniffer to rock conditional checks.
Mostly focuses on IE and Mobile currently, but can/will add more as needed.

Currently, you can check for

### Mobile
- Android : `Android()`
- BlackBerry : `BlackBerry()`
- iOS : `iOS()`
- Opera Mini : `OperaMini()`
- IE Mobile : `IEMobile()`
- Any Mobile (checks all the above) : `anyMobile()`

### IEs
- Edge : `Edge()`
- IE : `IE()`
- IE10 : `IE10()`
- anyMS (IEs and Edge) : `anyMS()`

### Other Browsers
- Chrome
- Safari
- Firefox
-

## Usage

Include in your project, and the rock you checks like :

```
/**
 * Bind Touch Start On mobile.
 */
if ( WhoDis.anyMobile() ) {
  document.addEventListener("touchstart", function(){}, true);
}


/**
 * Add Classes for IEs or whatevers
 */

const html = document.querySelector('html');

if ( WhoDis.anyMS() ) {
  html.classList.add('is-ms');
}

if ( WhoDis.IE() ) {
  html.classList.add('is-ie');
}

if ( WhoDis.IE10() ) {
  html.classList.add('is-ie10');
}

if ( WhoDis.Edge() ) {
  html.classList.add('is-edge');
}

if ( WhoDis.Safari() ) {
  html.classList.add('is-safari');
}

...
```
