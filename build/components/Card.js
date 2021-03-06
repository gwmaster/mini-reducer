"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./card.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(props) {
  return _react["default"].createElement("div", {
    className: "card"
  }, "Card ", props.children);
};

var _default = Card;
exports["default"] = _default;