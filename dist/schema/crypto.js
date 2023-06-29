"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoSchema = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CryptoSchema = _mongoose["default"].Schema({
  base_unit: {
    type: String
  },
  quote_unit: {
    type: String
  },
  low: {
    type: String
  },
  high: {
    type: String
  },
  last: {
    type: String
  },
  type: {
    type: String
  },
  open: {
    type: String
  },
  volume: {
    type: String
  },
  sell: {
    type: String
  },
  buy: {
    type: String
  },
  at: {
    type: Number
  },
  name: {
    type: String
  }
});
exports.CryptoSchema = CryptoSchema;