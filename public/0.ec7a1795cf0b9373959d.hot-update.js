webpackHotUpdate(0,{

/***/ 355:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/AddBioInfo.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 55);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 354);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddBioInfo = function (_Component) {\n\t_inherits(AddBioInfo, _Component);\n\n\tfunction AddBioInfo(props) {\n\t\t_classCallCheck(this, AddBioInfo);\n\n\t\tvar _this = _possibleConstructorReturn(this, (AddBioInfo.__proto__ || Object.getPrototypeOf(AddBioInfo)).call(this, props));\n\n\t\t_this.state = {\n\t\t\theader: '',\n\t\t\tcontent: ''\n\t\t};\n\t\t_this.handleInputChange = _this.handleInputChange.bind(_this);\n\t\t_this.submitBioInfo = _this.submitBioInfo.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(AddBioInfo, [{\n\t\tkey: 'submitBioInfo',\n\t\tvalue: function submitBioInfo() {\n\t\t\tvar content = this.state.content.content;\n\n\t\t\t/**if (content.length == 0) {\n   \talert(\"Cannot submit empty bio information.\");\n   \treturn;\n   } */\n\n\t\t\tvar state = this.state;\n\t\t\tconsole.log('state');\n\t\t\tconsole.log(state.content);\n\t\t\t//state.push({bioInfo:content})\n\t\t\t//this.setState(state)\n\t\t\tvar add = this.props.add;\n\n\t\t\tadd(content);\n\t\t}\n\t}, {\n\t\tkey: 'handleInputChange',\n\t\tvalue: function handleInputChange(event) {\n\t\t\tthis.setState({ content: event.target.value });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar content = this.state.content;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement('input', { type: 'text', value: content, onChange: this.handleInputChange }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.submitBioInfo },\n\t\t\t\t\t'Add'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.submitBioInfo },\n\t\t\t\t\t'Delete'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn AddBioInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tadd: function add(content) {\n\t\t\tdispatch((0, _index.addBioInfo)(content));\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddBioInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQWRkQmlvSW5mby5qcz8zOThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZEJpb0luZm8gfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuXG5jbGFzcyBBZGRCaW9JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlYWRlcjogJycsXG5cdFx0XHRjb250ZW50OiAnJ1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0QmlvSW5mbyA9IHRoaXMuc3VibWl0QmlvSW5mby5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0QmlvSW5mbygpIHtcblx0XHRjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuc3RhdGUuY29udGVudDtcblxuXHRcdC8qKmlmIChjb250ZW50Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRhbGVydChcIkNhbm5vdCBzdWJtaXQgZW1wdHkgYmlvIGluZm9ybWF0aW9uLlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9ICovXG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXG5cdFx0Y29uc29sZS5sb2coJ3N0YXRlJylcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5jb250ZW50KVxuXHRcdC8vc3RhdGUucHVzaCh7YmlvSW5mbzpjb250ZW50fSlcblx0XHQvL3RoaXMuc2V0U3RhdGUoc3RhdGUpXG5cdFx0Y29uc3R7IGFkZCB9ID0gdGhpcy5wcm9wcztcblx0XHRhZGQoY29udGVudCk7XG5cdH1cblxuXHRoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtjb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gLz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEJpb0luZm99PkFkZDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0QmlvSW5mb30+RGVsZXRlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcblx0cmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG5cdHJldHVybiB7XG5cdFx0YWRkOiBjb250ZW50ID0+IHtcblx0XHRcdGRpc3BhdGNoKGFkZEJpb0luZm8oY29udGVudCkpO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkQmlvSW5mbyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQWRkQmlvSW5mby5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBWUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///355\n");

/***/ })

})