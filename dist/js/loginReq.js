'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import AuthStore from 'stores/AuthStore';

var LoginRequired = _react2.default.createClass({
  displayName: 'LoginRequired',

  statics: {
    willTransitionTo: function willTransitionTo(transition, params, query, callback) {
      if (this.state.userData.role === undefined) {
        // go over to login page
        transition.redirect('/login', null, { redirect: transition.path });
      }
      //callback();
    }
  },
  render: function render() {
    console.log("AUTH ------------->");
    return _react2.default.createElement(_reactRouter2.default.RouteHandler, null);
  }
});

module.exports = { LoginRequired: LoginRequired };