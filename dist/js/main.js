'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _parentComp = require('./parentComp.js');

var _parentComp2 = _interopRequireDefault(_parentComp);

var _repairJob = require('./repairJob.js');

var _repairJob2 = _interopRequireDefault(_repairJob);

var _serviceJob = require('./serviceJob.js');

var _serviceJob2 = _interopRequireDefault(_serviceJob);

var _loginPage = require('./loginPage.js');

var _loginPage2 = _interopRequireDefault(_loginPage);

var _adminhomePage = require('./adminhomePage.js');

var _adminhomePage2 = _interopRequireDefault(_adminhomePage);

var _homePage = require('./homePage.js');

var _homePage2 = _interopRequireDefault(_homePage);

var _loginReq = require('./loginReq.js');

var _loginReq2 = _interopRequireDefault(_loginReq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* main.js */

require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/font-awesome/css/font-awesome.css');
require('./../css/custom.css');

(0, _reactDom.render)(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
				_reactRouter.Route,
				{ path: '/', component: _parentComp2.default },
				_react2.default.createElement(_reactRouter.IndexRedirect, { to: '/login' }),
				_react2.default.createElement(_reactRouter.Route, { path: '/login', component: _loginPage2.default }),
				_react2.default.createElement(
						_reactRouter.Route,
						{ handler: _loginReq2.default },
						_react2.default.createElement(_reactRouter.Route, { path: '/admin', component: _adminhomePage2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/home', component: _homePage2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/repair', component: _repairJob2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/service', component: _serviceJob2.default })
				)
		)
), document.getElementById('root'));