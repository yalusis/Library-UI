"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NativeButton = function NativeButton(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    type = _ref.type,
    disabled = _ref.disabled,
    backgroundColor = _ref.backgroundColor,
    color = _ref.color,
    padding = _ref.padding,
    borderRadius = _ref.borderRadius,
    cursor = _ref.cursor,
    border = _ref.border,
    outline = _ref.outline;
  var defaultStyles = {
    backgroundColor: '#389eec',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '2px',
    outline: 'none'
  };
  var buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : defaultStyles.backgroundColor,
    color: color ? color : defaultStyles.color,
    padding: padding ? padding : defaultStyles.padding,
    borderRadius: borderRadius ? borderRadius : defaultStyles.borderRadius,
    cursor: cursor ? cursor : defaultStyles.cursor,
    border: border ? border : defaultStyles.border,
    outline: outline ? outline : defaultStyles.outline
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: buttonStyle
  }, text);
};
var _default = NativeButton;
exports["default"] = _default;