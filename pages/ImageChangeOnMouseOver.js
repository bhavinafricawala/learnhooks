import React from 'react';
import ImageToggleOnMouseHover from '../src/ImageToggleOnMouseHover';

const ImageChangeOnMouseOver = () => (
  <div>
    <ImageToggleOnMouseHover
      primaryImg="/static/speakers/bw/Speaker-187.jpg"
      secondaryImg="/static/speakers/Speaker-187.jpg"
    />
    &nbsp;&nbsp;&nbsp;
    <ImageToggleOnMouseHover
      primaryImg="/static/speakers/bw/Speaker-1124.jpg"
      secondaryImg="/static/speakers/Speaker-1124.jpg"
    />
  </div>
);

export default ImageChangeOnMouseOver;
