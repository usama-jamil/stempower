webpackHotUpdate(0,{

/***/ 161:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/reducers/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction rootReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'Devany' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.ADD_BIO_INFO:\n            return Object.assign({}, state, {\n                bioInfo: [].concat(_toConsumableArray(state.bioInfo), [content, header]) });\n            break;\n        default:\n            return state;\n    }\n}\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL2luZGV4LmpzP2NmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSB7bmFtZTogJ0RldmFueSd9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgXHRjYXNlIHR5cGVzLkFERF9CSU9fSU5GTzpcbiAgICBcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgXHRcdFx0YmlvSW5mbzpbLi4uc3RhdGUuYmlvSW5mbyxcbiAgICBcdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5jb250ZW50LFxuICAgIFx0XHRcdFx0aGVhZGVyOiBhY3Rpb24uaGVhZGVyXG4gICAgXHRcdFx0XX1cbiAgICBcdFx0KTtcbiAgICBcdFx0YnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3JlZHVjZXJzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///161\n");

/***/ }),

/***/ 353:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 248);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _actions = __webpack_require__(/*! ../actions/ */ 652);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'addBioInfo',\n        value: function addBioInfo(header, content) {}\n    }, {\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var _this2 = this;\n\n            _axios2.default.get('/api/mentors/1').then(function (_ref) {\n                var data = _ref.data;\n\n                console.log(data.mentor);\n                var mentor = data.mentor;\n                _this2.setState({ name: mentor.name, college: mentor.college, year: mentor.year, bio: mentor.bio });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //mostly do HTML in render \n\n            function addTextBox(plusSignId) {\n                console.log('add text box clicked');\n                console.log(plusSignId);\n            }\n\n            function deleteTextBox(e) {\n                e.preventDefault();\n                console.log('delete text box clicked');\n            }\n            return _react2.default.createElement(\n                'div',\n                { id: 'container' },\n                _react2.default.createElement(\n                    'table',\n                    { id: 'table' },\n                    _react2.default.createElement(\n                        'tbody',\n                        null,\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'first_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'one_column', colSpan: '2' },\n                                _react2.default.createElement('div', { className: 'rectangle', style: { width: '200px', height: '200px', border: '1px solid #000' } }),\n                                _react2.default.createElement(\n                                    'h1',\n                                    null,\n                                    this.state.name\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'second_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'two_column' },\n                                'College: ',\n                                this.state.college,\n                                _react2.default.createElement('br', null),\n                                'Year: ',\n                                this.state.year\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'third_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_coulmn', colSpan: '2' },\n                                ' ',\n                                this.state.bio,\n                                ' '\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fourth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_row_column' },\n                                'Why I joined StemPower...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { id: 'add_join', onClick: function onClick() {\n                                            return z('devany');\n                                        } },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { id: 'delete_join', onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'sixth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'sixth_row_column' },\n                                'My Background...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { id: 'add_background', onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'seventh_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'seventh_row_column' },\n                                'My message to my troop...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { id: 'add_message', onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fifth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fifth_row_column' },\n                                'Fun Facts about me...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { id: 'add_facts', onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5pbXBvcnQgeyBhZGRCaW9JbmZvIH0gZnJvbSAnLi4vYWN0aW9ucy8nO1xuZXhwb3J0IGNsYXNzIE1lbWJlclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2xsZWdlOiAnJyxcbiAgICAgICAgICAgIHllYXI6ICcnLFxuICAgICAgICAgICAgYmlvOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZEJpb0luZm8oaGVhZGVyLCBjb250ZW50KSB7XG5cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudG9ycy8xJykudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVudG9yKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnRvciA9IGRhdGEubWVudG9yO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogbWVudG9yLm5hbWUsIGNvbGxlZ2U6IG1lbnRvci5jb2xsZWdlLCB5ZWFyOiBtZW50b3IueWVhciwgYmlvOiBtZW50b3IuYmlvfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgLy9tb3N0bHkgZG8gSFRNTCBpbiByZW5kZXIgXG5cbiAgICAgICAgZnVuY3Rpb24gYWRkVGV4dEJveChwbHVzU2lnbklkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRleHQgYm94IGNsaWNrZWQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsdXNTaWduSWQpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRleHRCb3goZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSB0ZXh0IGJveCBjbGlja2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cImZpcnN0X3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJvbmVfY29sdW1uXCIgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGVcIiBzdHlsZT17eyB3aWR0aDonMjAwcHgnLCBoZWlnaHQ6JzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnN0YXRlLm5hbWUgfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cInNlY29uZF9yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwidHdvX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGVnZTogeyB0aGlzLnN0YXRlLmNvbGxlZ2UgfTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBZZWFyOiB7IHRoaXMuc3RhdGUueWVhciB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGlkPVwidGhpcmRfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cImZvdXJ0aF9jb3VsbW5cIiBjb2xTcGFuPVwiMlwiPiB7IHRoaXMuc3RhdGUuYmlvIH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcImZvdXJ0aF9yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZCA9IFwiZm91cnRoX3Jvd19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2h5IEkgam9pbmVkIFN0ZW1Qb3dlci4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFkZF9qb2luXCIgb25DbGljayA9IHsoKT0+eignZGV2YW55Jyl9PiYjNDM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJkZWxldGVfam9pblwiIG9uQ2xpY2sgPSB7ZGVsZXRlVGV4dEJveH0+JiN4MjIxMjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcInNpeHRoX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkID0gXCJzaXh0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IEJhY2tncm91bmQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFkZF9iYWNrZ3JvdW5kXCIgb25DbGljayA9IHthZGRUZXh0Qm94fT4mIzQzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2sgPSB7ZGVsZXRlVGV4dEJveH0+JiN4MjIxMjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcInNldmVudGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcInNldmVudGhfcm93X2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBtZXNzYWdlIHRvIG15IHRyb29wLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQgPSBcImFkZF9tZXNzYWdlXCIgb25DbGljayA9IHthZGRUZXh0Qm94fT4mIzQzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2sgPSB7ZGVsZXRlVGV4dEJveH0+JiN4MjIxMjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcImZpZnRoX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkID0gXCJmaWZ0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1biBGYWN0cyBhYm91dCBtZS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYWRkX2ZhY3RzXCIgb25DbGljayA9IHthZGRUZXh0Qm94fT4mIzQzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2sgPSB7ZGVsZXRlVGV4dEJveH0+JiN4MjIxMjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL01lbWJlclBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7OztBQUFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFGQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTEE7QUFoREE7QUFEQTtBQURBO0FBaUVBOzs7O0FBdkdBO0FBQ0E7QUF1R0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///353\n");

/***/ }),

/***/ 652:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.addBioInfo = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ 653);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar addBioInfo = exports.addBioInfo = function addBioInfo(header, content) {\n\treturn {\n\t\ttype: types.ADD_BIO_INFO,\n\t\theader: header,\n\t\tcontent: content\n\t};\n}; // Action Creators//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3Rpb24gQ3JlYXRvcnNcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRCaW9JbmZvID0gKGhlYWRlciwgY29udGVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IHR5cGVzLkFERF9CSU9fSU5GTyxcblx0XHRoZWFkZXI6IGhlYWRlcixcblx0XHRjb250ZW50OiBjb250ZW50XG5cdH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FjdGlvbnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///652\n");

/***/ }),

/***/ 653:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/types.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/* Action types */\nvar ADD_MEMBER = exports.ADD_MEMBER = 'ADD_MEMBER';\nvar ADD_BIO_INFO = exports.ADD_BIO_INFO = 'ADD_BIO_INFO';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvdHlwZXMuanM/MDVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBY3Rpb24gdHlwZXMgKi9cbmV4cG9ydCBjb25zdCBBRERfTUVNQkVSID0gJ0FERF9NRU1CRVInO1xuZXhwb3J0IGNvbnN0IEFERF9CSU9fSU5GTyA9ICdBRERfQklPX0lORk8nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9hY3Rpb25zL3R5cGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///653\n");

/***/ })

})