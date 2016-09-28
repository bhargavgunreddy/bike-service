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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* repairJob.js */

var RepairJobComp = function (_React$Component) {
	_inherits(RepairJobComp, _React$Component);

	function RepairJobComp(props, context) {
		_classCallCheck(this, RepairJobComp);

		var _this = _possibleConstructorReturn(this, (RepairJobComp.__proto__ || Object.getPrototypeOf(RepairJobComp)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(RepairJobComp, [{
		key: 'goBack',
		value: function goBack() {
			this.context.router.goBack(-1);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {

			//var domRef = React.findDOMNode(this.refs.repairVehicleNum);
			console.log(this.refs, "<-");
			this.props.handleSubmit.apply(this);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'form-group btn-btn-success col-md-12' },
					_react2.default.createElement('div', { className: 'col-md-2' }),
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'btn btn-success col-md-1',
							onClick: this.goBack.bind(this) },
						'BACK'
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement('div', { className: 'col-md-9' })
				),
				_react2.default.createElement(
					'form',
					{ className: 'form' },
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'tbody',
							{ className: 'table-bordered' },
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: 'repairVehicleNum' },
										'Vehicle Reg No:'
									)
								),
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'div',
										{ className: 'input-group' },
										_react2.default.createElement(
											'span',
											{ className: 'input-group-addon' },
											_react2.default.createElement('span', { className: 'glyphicon glyphicon-lock' })
										),
										_react2.default.createElement('input', { ref: 'repairVehicleNum', className: 'form-control', id: 'repairVehicleNum', type: 'number' })
									)
								)
							),
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									{ className: 'col-md-4' },
									_react2.default.createElement(
										'label',
										{ htmlFor: 'repairUnderWarranty', className: 'control-label' },
										'Repair under Warranty ?'
									)
								),
								_react2.default.createElement(
									'td',
									{ className: 'col-md-8' },
									_react2.default.createElement(
										'select',
										{ ref: 'repairUnderWarranty', id: 'repairUnderWarranty', className: 'form-control' },
										_react2.default.createElement(
											'option',
											{ value: 'yes' },
											'Yes'
										),
										_react2.default.createElement(
											'option',
											{ value: 'no' },
											'No'
										)
									)
								)
							),
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: 'repairOrReplace' },
										'Job Type'
									)
								),
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'select',
										{ ref: 'repairOrReplace', className: 'form-control', id: 'repairOrReplace' },
										_react2.default.createElement(
											'option',
											{ value: 'repair' },
											'Repair'
										),
										_react2.default.createElement(
											'option',
											{ value: 'replace' },
											'Replace'
										)
									)
								)
							),
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: 'repairPart' },
										'Part to be Repaired'
									),
									_react2.default.createElement('br', null),
									_react2.default.createElement(
										'span',
										null,
										'Select Not sure if you are not sure of the cause'
									)
								),
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'select',
										{ ref: 'repairPart', id: 'repairPart', className: 'form-control' },
										_react2.default.createElement(
											'option',
											{ value: 'engine' },
											'Engine'
										),
										_react2.default.createElement(
											'option',
											{ value: 'brake' },
											'Brake'
										),
										_react2.default.createElement(
											'option',
											{ value: 'body' },
											'Body'
										),
										_react2.default.createElement(
											'option',
											{ value: 'interior' },
											'Interior'
										),
										_react2.default.createElement(
											'option',
											{ value: 'electricals' },
											'Electricals'
										),
										_react2.default.createElement(
											'option',
											{ value: 'notsure' },
											'Not Sure'
										)
									)
								)
							),
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: 'repairDesc' },
										' Description '
									)
								),
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement('textarea', { ref: 'repairDesc', id: 'repairDesc', className: 'form-control' })
								)
							),
							_react2.default.createElement(
								'tr',
								{ className: 'form-group' },
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-default' },
										'RESET'
									)
								),
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
										'SUBMIT'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return RepairJobComp;
}(_react2.default.Component);

;

RepairJobComp.contextTypes = {
	router: _react2.default.PropTypes.object.isRequired
};

module.exports = RepairJobComp;