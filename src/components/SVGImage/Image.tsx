// Render svg as an Image component

import React from 'react';
import {Image} from 'react-native';
import dimensions from '../../utils/dimensions';

import {IImage} from './types';

export const ImageRenderer: React.FC<IImage> = ({
  assetSrc: RenderImage,
  width,
  height,
  fill,
  url,
}) => {
  width = width ?? dimensions.viewWidth(22);
  height = height ?? dimensions.viewHeight(22);
  if (url) {
    return (
      <Image
        source={{
          uri: url,
          width: width,
          height: height,
        }}
      />
    );
  }
  return <RenderImage width={width} height={height} fill={fill} />;
};
