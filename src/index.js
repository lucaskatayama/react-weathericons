import React from 'react';

export const srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px',
};

const WeatherIcons = ({
  className,
  fixedWidth,
  flip,
  name,
  rotate,
  size,
  tag = 'i',
  ...props
}) => {
  const classNames = [];
  classNames.push('wi');
  classNames.push(`wi-${name}`);
  fixedWidth && classNames.push('wi-fw');
  flip && classNames.push(`wi-flip-${flip}`);
  rotate && classNames.push(`wi-rotate-${rotate}`);
  size && classNames.push(`wi-size-${size}`);
  // Add any custom class names at the end.
  className && classNames.push(className);
  let fontSize;
  switch (size) {
    case 'lg':
      fontSize = '1.33333333em';
      break;
    case '2x':
      fontSize = '2em';
      break;
    case '3x':
      fontSize = '3em';
      break;
    case '4x':
      fontSize = '4em';
      break;
    case '5x':
      fontSize = '5em';
      break;
    default:
      fontSize = 'normal';
      break;
  }

  return React.createElement(tag, { ...props, className: classNames.join(' '), style: { fontSize } });
};

WeatherIcons.displayName = 'WeatherIcons';
WeatherIcons.propTypes = {
  ariaLabel: React.PropTypes.string,
  border: React.PropTypes.bool,
  className: React.PropTypes.string,
  fixedWidth: React.PropTypes.bool,
  flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
  inverse: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  pulse: React.PropTypes.bool,
  rotate: React.PropTypes.oneOf([90, 180, 270]),
  size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: React.PropTypes.bool,
  stack: React.PropTypes.oneOf(['1x', '2x']),
  tag: React.PropTypes.string,
};

export default WeatherIcons;
