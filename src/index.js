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


/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps (rather than smoothly)
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string (eg 'i' or 'em')
 * @module FontAwesome
 * @type {ReactClass}
 */

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

  fixedWidth && classNames.push('wi-fw');

  flip && classNames.push(`wi-flip-${flip}`);

  rotate && classNames.push(`wi-rotate-${rotate}`);

  // Add any custom class names at the end.
  className && classNames.push(className);
  return React.createElement(tag, { ...props, ariaHidden: true, className: classNames.join(' '), style: { fontSize } });
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
