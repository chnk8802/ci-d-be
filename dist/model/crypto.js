"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crypto = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _crypto = require("../schema/crypto");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Crypto = _mongoose["default"].model("Crypto", _crypto.CryptoSchema);
exports.Crypto = Crypto;