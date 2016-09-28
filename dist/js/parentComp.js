'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _utility = require('./utility.js');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* root.js */

var ParentComp = function (_React$Component) {
	_inherits(ParentComp, _React$Component);

	function ParentComp(props, context) {
		_classCallCheck(this, ParentComp);

		var _this = _possibleConstructorReturn(this, (ParentComp.__proto__ || Object.getPrototypeOf(ParentComp)).call(this, props));

		_this.state = {
			userData: {}
		};
		return _this;
	}

	_createClass(ParentComp, [{
		key: 'handleSubmit',
		value: function handleSubmit(userData) {
			//	console.log("handle submit", userData);
			this.state.userData = userData ? userData : "";
			//console.log("handle submit", userData, this.state.userData);

			_utility2.default.makeAjaxData('/getUserDetails', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
		}
	}, {
		key: 'handleLogout',
		value: function handleLogout() {
			console.log("User will be logged out");
			this.state.userData = {};
			this.context.router.replace('/login');
		}
	}, {
		key: 'redirectToMainPage',
		value: function redirectToMainPage(param) {
			//console.log("redirection", param, param.length);
			// null check
			if (param.length > 0) {
				this.state.userData = param[0];
				//console.log("redirection", param[0]);
				if (this.state.userData.role) {
					this.state.userData.role.toString().trim().toLowerCase() === "admin" ? this.context.router.replace('/admin') : this.context.router.replace('/home');
				} else {
					console.log("No role assigned to user");
				}
			} else console.log("error in redirecting url");
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log("->", this.state.userData.role, this.state.userData.role ? "block" : "none" );
			var logoutStyle = { "display": this.state.userData.role ? "block" : "none" };
			return _react2.default.createElement(
				'div',
				{ className: 'row parentComp' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-12 col-sm-12', style: logoutStyle },
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-info', onClick: this.handleLogout.bind(this) },
						'LOGOUT'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-md-12 col-sm-12 ticketsCountBanner' },
					_react2.default.createElement('div', { className: 'col-md-8 col-sm-2' }),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-sm-10' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6 col-sm-6 circle' },
							_react2.default.createElement(
								'span',
								{ className: 'col-md-8 col-sm-12 circleLabel' },
								'Total Tickets'
							),
							_react2.default.createElement(
								'span',
								{ className: 'col-md-4 col-sm-12' },
								'23'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6 col-sm-6 circle' },
							_react2.default.createElement(
								'span',
								{ className: 'col-md-8 col-sm-12 circleLabel' },
								'Tickets Today'
							),
							_react2.default.createElement(
								'span',
								{ className: 'col-md-4 col-sm-12' },
								'5'
							)
						)
					)
				),
				this.props.children && _react2.default.cloneElement(this.props.children, {
					handleSubmit: this.handleSubmit,
					handleLogin: this.handleLogin,
					parentScope: this,
					userInfo: this.state.userData
				})
			);
		}
	}]);

	return ParentComp;
}(_react2.default.Component);

ParentComp.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

module.exports = ParentComp;