"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./box.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Box = function Box(props) {
  return _react["default"].createElement("div", {
    className: "box"
  }, "Box ", props.children);
};

var _default = Box;
exports["default"] = _default;