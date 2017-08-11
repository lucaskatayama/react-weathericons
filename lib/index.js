'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srOnlyStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var srOnlyStyle = exports.srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};

var WeatherIcons = function WeatherIcons(_ref) {
  var className = _ref.className,
      fixedWidth = _ref.fixedWidth,
      flip = _ref.flip,
      name = _ref.name,
      rotate = _ref.rotate,
      size = _ref.size,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'i' : _ref$tag,
      props = _objectWithoutProperties(_ref, ['className', 'fixedWidth', 'flip', 'name', 'rotate', 'size', 'tag']);

  var classNames = [];
  classNames.push('wi');
  classNames.push('wi-' + name);
  fixedWidth && classNames.push('wi-fw');
  flip && classNames.push('wi-flip-' + flip);
  rotate && classNames.push('wi-rotate-' + rotate);
  size && classNames.push('wi-size-' + size);
  // Add any custom class names at the end.
  className && classNames.push(className);
  var fontSize = void 0;
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

  return _react2.default.createElement(tag, _extends({}, props, { className: classNames.join(' '), style: { fontSize: fontSize } }));
};

WeatherIcons.displayName = 'WeatherIcons';
WeatherIcons.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = WeatherIcons;