webpackHotUpdate(0,{

/***/ 355:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/AddBioInfo.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 55);\n\nvar _index = __webpack_require__(/*! ../actions/index */ 354);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddBioInfo = function (_Component) {\n\t_inherits(AddBioInfo, _Component);\n\n\tfunction AddBioInfo(props) {\n\t\t_classCallCheck(this, AddBioInfo);\n\n\t\tvar _this = _possibleConstructorReturn(this, (AddBioInfo.__proto__ || Object.getPrototypeOf(AddBioInfo)).call(this, props));\n\n\t\t_this.state = {\n\t\t\theader: '',\n\t\t\tcontent: ''\n\t\t};\n\t\t_this.handleInputChange = _this.handleInputChange.bind(_this);\n\t\t_this.submitBioInfo = _this.submitBioInfo.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(AddBioInfo, [{\n\t\tkey: 'submitBioInfo',\n\t\tvalue: function submitBioInfo() {\n\t\t\tvar content = this.state.content.content;\n\n\t\t\t/**if (content.length == 0) {\n   \talert(\"Cannot submit empty bio information.\");\n   \treturn;\n   } */\n\n\t\t\tvar state = this.state;\n\t\t\tconsole.log('content: ');\n\t\t\tconsole.log(content);\n\t\t\t//state.push({bioInfo:content})\n\t\t\t//this.setState(state)\n\t\t\tvar add = this.props.add;\n\n\t\t\tadd(content);\n\t\t}\n\t}, {\n\t\tkey: 'handleInputChange',\n\t\tvalue: function handleInputChange(event) {\n\t\t\tthis.setState({ content: event.target.value });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar content = this.state.content;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement('input', { type: 'text', value: content, onChange: this.handleInputChange }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.submitBioInfo },\n\t\t\t\t\t'Add'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: this.submitBioInfo },\n\t\t\t\t\t'Delete'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn AddBioInfo;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tadd: function add(content) {\n\t\t\tdispatch((0, _index.addBioInfo)(content));\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddBioInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQWRkQmlvSW5mby5qcz8zOThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGFkZEJpb0luZm8gfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuXG5jbGFzcyBBZGRCaW9JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlYWRlcjogJycsXG5cdFx0XHRjb250ZW50OiAnJ1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0QmlvSW5mbyA9IHRoaXMuc3VibWl0QmlvSW5mby5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0QmlvSW5mbygpIHtcblx0XHRjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuc3RhdGUuY29udGVudDtcblxuXHRcdC8qKmlmIChjb250ZW50Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRhbGVydChcIkNhbm5vdCBzdWJtaXQgZW1wdHkgYmlvIGluZm9ybWF0aW9uLlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9ICovXG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXG5cdFx0Y29uc29sZS5sb2coJ2NvbnRlbnQ6ICcpXG5cdFx0Y29uc29sZS5sb2coY29udGVudClcblx0XHQvL3N0YXRlLnB1c2goe2Jpb0luZm86Y29udGVudH0pXG5cdFx0Ly90aGlzLnNldFN0YXRlKHN0YXRlKVxuXHRcdGNvbnN0eyBhZGQgfSA9IHRoaXMucHJvcHM7XG5cdFx0YWRkKGNvbnRlbnQpO1xuXHR9XG5cblx0aGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtjb250ZW50OiBldmVudC50YXJnZXQudmFsdWV9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRCaW9JbmZvfT5BZGQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEJpb0luZm99PkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG5cdHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGFkZDogY29udGVudCA9PiB7XG5cdFx0XHRkaXNwYXRjaChhZGRCaW9JbmZvKGNvbnRlbnQpKTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZEJpb0luZm8pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FkZEJpb0luZm8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///355\n");

/***/ })

})