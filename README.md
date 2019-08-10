# OpenSeadragonSmartScrollZoom
This is a small, simple plugin for OpenSeadragon, which detects how fast the user is scrolling the mouse wheel and increases the scroll speed accordingly.

Download and include `openseadragon-smartScrollZoom.js` after OpenSeadragon on your website.

To use this plugin, include this after declaring a viewer instance:
`````javascript
viewer.smartScrollZoom({
  minScrolls: 2
  ...
});
`````
It would look something like this:
`````javascript
var viewer = new OpenSeadragon(...);
viewer.scalebar({
  minWidth: ...,
  pixelsPerMeter: ...,
  color: ...,
  ...
});
`````
