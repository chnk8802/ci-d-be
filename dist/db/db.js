"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var connectDB = function connectDB() {
  // Connect to MongoDB using Mongoose
  var urlProd = "".concat(process.env.DB_URL);
  _mongoose["default"].connect(urlProd, {
    useNewUrlParser: true
  }).then(function () {
    console.log('Connected to MongoDB');
  })["catch"](function (error) {
    console.error('Failed to connect to MongoDB:', error);
  });
};
exports.connectDB = connectDB;