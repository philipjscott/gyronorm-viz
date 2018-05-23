# gyronorm-viz

### Visualize mobile gyroscope data on the web!

This is a simple demo of what you can do with [gyronorm.js](https://github.com/dorukeker/gyronorm.js/), a JavaScript library that accesses and normalizes accelerometer and gyroscope data on mobile devices. 

Visualizations done with [Three.js](https://github.com/mrdoob/three.js/).

Demo available [here](http://scottyfillups.github.io/gyronorm-viz). It only works on mobile; try tilting your phone!

![gyronorm-viz demo](http://scottyfillups.github.io/gyronorm-viz/assets/demo.gif)

### Licensing

gyronorm.js depends on fulltilt, which is licensed under a "Creative Commons Attribution-NonCommercial 4.0 International License", and isn't recommended for commercial projects. I recommend listening to the `deviceorientation` global event instead:

```js
window.addEventListener('deviceorientation', handler)
```

Here's a link to the documentation: <https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation>
