"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* loginPage.js */

var loginComp = function (_React$Component) {
	_inherits(loginComp, _React$Component);

	function loginComp(props, context) {
		_classCallCheck(this, loginComp);

		return _possibleConstructorReturn(this, (loginComp.__proto__ || Object.getPrototypeOf(loginComp)).call(this, props, context));
	}

	_createClass(loginComp, [{
		key: "handleLoginSubmit",
		value: function handleLoginSubmit() {
			//console.log("handle submit", this.state);
			var userData = {
				uname: this.refs.username ? this.refs.username.value : "",
				pwd: this.refs.password ? this.refs.password.value : ""
			};
			this.props.handleSubmit.apply(this.props.parentScope, [userData]);

			//Utility.makeAjaxData('/rest', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"form",
						{ className: "form", name: "loginForm" },
						_react2.default.createElement(
							"table",
							{ className: "table" },
							_react2.default.createElement(
								"tbody",
								{ className: "table-bordered" },
								_react2.default.createElement(
									"tr",
									{ className: "form-group" },
									_react2.default.createElement(
										"td",
										null,
										_react2.default.createElement(
											"label",
											{ htmlFor: "username" },
											"Username:"
										)
									),
									_react2.default.createElement(
										"td",
										null,
										_react2.default.createElement(
											"div",
											{ className: "input-group" },
											_react2.default.createElement(
												"span",
												{ className: "input-group-addon" },
												_react2.default.createElement("span", { className: "glyphicon glyphicon-lock" })
											),
											_react2.default.createElement("input", { ref: "username", type: "text", className: "form-control", id: "username" })
										)
									)
								),
								_react2.default.createElement(
									"tr",
									{ className: "form-group" },
									_react2.default.createElement(
										"td",
										{ className: "col-md-4" },
										_react2.default.createElement(
											"label",
											{ htmlFor: "password", className: "control-label" },
											"Password"
										)
									),
									_react2.default.createElement(
										"td",
										{ className: "col-md-8" },
										_react2.default.createElement("input", { ref: "password", type: "password", className: "form-control", id: "password" })
									)
								),
								_react2.default.createElement(
									"tr",
									{ className: "form-group" },
									_react2.default.createElement(
										"td",
										null,
										_react2.default.createElement(
											"button",
											{ type: "button", className: "btn btn-default" },
											"Reset"
										)
									),
									_react2.default.createElement(
										"td",
										null,
										_react2.default.createElement(
											"button",
											{ type: "button", className: "btn btn-default login", onClick: this.handleLoginSubmit.bind(this) },
											"Login"
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return loginComp;
}(_react2.default.Component);

;

loginComp.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

module.exports = loginComp;