# WhoDis.js

Just a simple little sniffer (that mostly uses `navigator.userAgent`) so you can rock conditional checks.

## Build
`npm run build`

Uses `microbundle` to build out in cjs, es, umd.

## Dev
`npm run dev`

Watches for changes in `src`.

## Install (from npm)
`npm i whodis`

## Import (from npm install)
`import WhoDis from 'whodis'`

## Or, import from your file/projects
`import WhoDis from ./WhoDis`

Or, don't import and just use `src/WhoDis.es5.js`, which is just an ES5 IIFE.


## Usage
```
import WhoDis from 'who-dis'

// Add class to html
const html = document.querySelector('html');

if ( WhoDis.anyMS() ) {
  html.classList.add('is-ms');
}

if ( WhoDis.IE() ) {
  html.classList.add('is-ie');
}

if ( WhoDis.Safari() ) {
  html.classList.add('is-safari');
}

// bail if mobile
if (WhoDis.anyMobile) return;
```

## Log info on current `userAgent`

```
console.log(WhoDis.info)
```

## Current Checks

### Mobile
- Android : `WhoDis.Android()`
- BlackBerry : `WhoDis.BlackBerry()`
- iOS : `WhoDis.iOS()`
- Opera Mini : `WhoDis.OperaMini()`
- IE Mobile : `WhoDis.IEMobile()`
- Any Mobile (checks all the above) : `WhoDis.anyMobile()`
- Touch Screen : `WhoDis.Touch()`

### IEs
- Edge : `WhoDis.Edge()`
- IE : `WhoDis.IE()`
- IE10 : `WhoDis.IE10()`
- anyMS (IEs and Edge) : `WhoDis.anyMS()`

### Other Browsers
- Chrome : `WhoDis.Chrome()`
- Safari : `WhoDis.Safari()`
- Firefox : `WhoDis.Firefox()`
- Opera : `WhoDis.Opera()`
