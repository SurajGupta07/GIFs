import {Dimensions, PixelRatio} from 'react-native';

const screenWidth: number = Dimensions.get('window').width;
const screenHeight: number = Dimensions.get('window').height;

const DesignHeight: number = 812;
const DesignWidth: number = 360;

const viewWidth = (width: number): number => {
  if (!width) {
    const error = new Error('Width must present');
    throw error;
  }

  const percent: number = (width / DesignWidth) * 100;
  const elemWidth: number = parseFloat(percent + '%');

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const viewHeight = (height: number): number => {
  if (!height) {
    const error = new Error('Height must present');
    throw error;
  }

  const percent: number = (height / DesignHeight) * 100;
  const elemHeight: number = parseFloat(percent + '%');

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export default {
  screenWidth,
  screenHeight,
  viewHeight,
  viewWidth,
};
