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

var HomeComp = function (_React$Component) {
	_inherits(HomeComp, _React$Component);

	function HomeComp(props, context) {
		_classCallCheck(this, HomeComp);

		var _this = _possibleConstructorReturn(this, (HomeComp.__proto__ || Object.getPrototypeOf(HomeComp)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(HomeComp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//Utility.makeAjaxData()
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-12' },
					_react2.default.createElement('div', { className: 'col-md-2' }),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-8' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/repair' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'btn btn-default' },
									'REPAIR'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/service' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'btn btn-default' },
									'SERVICE'
								)
							)
						)
					),
					_react2.default.createElement('div', { className: 'col-md-2' })
				)
			);
		}
	}]);

	return HomeComp;
}(_react2.default.Component);

module.exports = HomeComp;