function resize (width, height, options) {
  if (is.defined(width)) {
    if (is.object(width) && !is.defined(options)) {
      options = width;
    } else if (is.integer(width) && width > 0) {
      this.options.width = width;
    } else {
      throw is.invalidParameterError('width', 'positive integer', width);
    }
  } else {
    this.options.width = -1;
  }
  if (is.defined(height)) {
    if (is.integer(height) && height > 0) {
      this.options.height = height;
    } else {
      throw is.invalidParameterError('height', 'positive integer', height);
    }
  } else {
    this.options.height = -1;
  }
  if (is.object(options)) {
    // Width
    if (is.defined(options.width)) {
      if (is.integer(options.width) && options.width > 0) {
        this.options.width = options.width;
      } else {
        throw is.invalidParameterError('width', 'positive integer', options.width);
      }
    }
    // Height
    if (is.defined(options.height)) {
      if (is.integer(options.height) && options.height > 0) {
        this.options.height = options.height;
      } else {
        throw is.invalidParameterError('height', 'positive integer', options.height);
      }
    }
    // Fit
    if (is.defined(options.fit)) {
      const canvas = mapFitToCanvas[options.fit];
      if (is.string(canvas)) {
        this.options.canvas = canvas;
      } else {
        throw is.invalidParameterError('fit', 'valid fit', options.fit);
      }
    }
    // Position
    if (is.defined(options.position)) {
      const pos = is.integer(options.position)
        ? options.position
        : strategy[options.position] || position[options.position] || gravity[options.position];
      if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
        this.options.position = pos;
      } else {
        throw is.invalidParameterError('position', 'valid position/gravity/strategy', options.position);
      }
    }
    // Background
    this._setBackgroundColourOption('resizeBackground', options.background);
    // Kernel
    if (is.defined(options.kernel)) {
      if (is.string(kernel[options.kernel])) {
        this.options.kernel = kernel[options.kernel];
      } else {
        throw is.invalidParameterError('kernel', 'valid kernel name', options.kernel);
      }
    }
    // Without enlargement
    if (is.defined(options.withoutEnlargement)) {
      this._setBooleanOption('withoutEnlargement', options.withoutEnlargement);
    }
    // Without reduction
    if (is.defined(options.withoutReduction)) {
      this._setBooleanOption('withoutReduction', options.withoutReduction);
    }
    // Shrink on load
    if (is.defined(options.fastShrinkOnLoad)) {
      this._setBooleanOption('fastShrinkOnLoad', options.fastShrinkOnLoad);
    }
  }
  return this;
}
