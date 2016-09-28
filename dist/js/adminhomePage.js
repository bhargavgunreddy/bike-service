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

var AdminHomeComp = function (_React$Component) {
	_inherits(AdminHomeComp, _React$Component);

	function AdminHomeComp(props, context) {
		_classCallCheck(this, AdminHomeComp);

		var _this = _possibleConstructorReturn(this, (AdminHomeComp.__proto__ || Object.getPrototypeOf(AdminHomeComp)).call(this, props));

		_this.state = {
			serviceRequests: []
		};
		return _this;
	}

	_createClass(AdminHomeComp, [{
		key: 'goBack',
		value: function goBack() {
			this.context.router.goBack(-1);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_utility2.default.makeAjaxData('/getServiceRequests', 'GET', "", this.populateData.bind(this));
		}
	}, {
		key: 'populateData',
		value: function populateData(data) {
			//console.log("home page Response", data);
			this.setState({ serviceRequests: data });
			//this.state.serviceRequests = data;
		}
	}, {
		key: 'handleAssignReq',
		value: function handleAssignReq() {
			console.log("handle assigned request");
		}
	}, {
		key: 'buildServiceRows',
		value: function buildServiceRows(list, index) {

			return _react2.default.createElement(
				'tr',
				{ key: list._id },
				_react2.default.createElement(
					'td',
					null,
					list.id
				),
				_react2.default.createElement(
					'td',
					null,
					list.regnum
				),
				_react2.default.createElement(
					'td',
					null,
					list.underwarranty.toString()
				),
				_react2.default.createElement(
					'td',
					null,
					list.jobtype
				),
				_react2.default.createElement(
					'td',
					null,
					list.part
				),
				_react2.default.createElement(
					'td',
					null,
					list.desc
				),
				_react2.default.createElement(
					'td',
					null,
					list.status
				),
				_react2.default.createElement(
					'td',
					{ onClick: this.handleAssignReq.bind(this) },
					'ASSIGN'
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log("params list", this.props.userInfo);
			var displayComp = this.state.serviceRequests.length > 0 ? this.state.serviceRequests.map(this.buildServiceRows.bind(this)) : _react2.default.createElement(
				'tr',
				null,
				_react2.default.createElement(
					'td',
					{ colSpan: '5' },
					'Great Insights takes time'
				)
			);
			return _react2.default.createElement(
				'div',
				{ className: 'row adminComp' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-12 fullDimension' },
					_react2.default.createElement('div', { className: 'col-md-2' }),
					_react2.default.createElement(
						'table',
						{ className: 'table tablebordered serviceReqTable' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								{ className: 'success' },
								_react2.default.createElement(
									'th',
									null,
									'ServiceId'
								),
								_react2.default.createElement(
									'th',
									null,
									'Reg Num'
								),
								_react2.default.createElement(
									'th',
									null,
									'Warranty'
								),
								_react2.default.createElement(
									'th',
									null,
									'Job Type'
								),
								_react2.default.createElement(
									'th',
									null,
									'Part'
								),
								_react2.default.createElement(
									'th',
									null,
									'Description'
								),
								_react2.default.createElement(
									'th',
									null,
									'Status'
								),
								_react2.default.createElement(
									'th',
									null,
									'Assign'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							displayComp
						)
					),
					_react2.default.createElement('div', { className: 'col-md-2' })
				)
			);
		}
	}]);

	return AdminHomeComp;
}(_react2.default.Component);

AdminHomeComp.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

module.exports = AdminHomeComp;