# WhoDis.js

Just a simple little userAgent sniffer to rock conditional checks.
Mostly focuses on IE and Mobile currently, but can/will add more as needed.

Currently, you can check for

### Mobile
- Android
- BlackBerry
- iOS
- Opera Mini
- IE Mobile
- Any Mobile (checks all the above)

### IEs
- Edge
- IE
- IE10
- anyMS (IEs and Edge)


## Usage

Include in your project, and the rock you checks like :

```
/**
 * Bind Touch Start On mobile.
 */
if ( WhoDis.anyMobile() ) {
  document.addEventListener("touchstart", function(){ console.log('touching') }, true);
}

/**
 * Add Classes for IEs
 */
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
```
