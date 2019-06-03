# canvas-fill-text-on-arc

Utility function for drawing text on an arc using the canvas API.

## Install

```sh
npm install canvas-fill-text-on-arc
```

## Usage

```js
import fillTextOnArc from 'canvas-fill-text-on-arc';

// Set font
context.font = 'normal 14px serif';

// Draw text
fillTextOnArc(
  context,
  'some text',
  cx,
  cy,
  radius,
  spacing
);
```
