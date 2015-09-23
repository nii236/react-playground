webpackHotUpdate(0,{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(66);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _altAltContainer = __webpack_require__(165);
	
	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);
	
	var _componentsChatbox = __webpack_require__(187);
	
	var _componentsChatbox2 = _interopRequireDefault(_componentsChatbox);
	
	var _componentsResponsePane = __webpack_require__(196);
	
	var _componentsResponsePane2 = _interopRequireDefault(_componentsResponsePane);
	
	var _storesChatStore = __webpack_require__(202);
	
	var _storesChatStore2 = _interopRequireDefault(_storesChatStore);
	
	var _storesSurveyStore = __webpack_require__(217);
	
	var _storesSurveyStore2 = _interopRequireDefault(_storesSurveyStore);
	
	var _actionsChatActions = __webpack_require__(216);
	
	var _actionsChatActions2 = _interopRequireDefault(_actionsChatActions);
	
	var _reactPikaday = __webpack_require__(224);
	
	var _reactPikaday2 = _interopRequireDefault(_reactPikaday);
	
	var ChatContainer = (function (_React$Component) {
	  _inherits(ChatContainer, _React$Component);
	
	  function ChatContainer(props) {
	    _classCallCheck(this, ChatContainer);
	
	    _get(Object.getPrototypeOf(ChatContainer.prototype), 'constructor', this).call(this, props);
	    this.submitSurvey = this.submitSurvey.bind(this);
	  }
	
	  _createClass(ChatContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesSurveyStore2['default'].fetchSurvey();
	    }
	  }, {
	    key: 'submitSurvey',
	    value: function submitSurvey(chatLogID) {
	      _storesSurveyStore2['default'].submitSurvey(chatLogID);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _altAltContainer2['default'],
	        {
	          actions: { ChatActions: _actionsChatActions2['default'] },
	          stores: {
	            ChatStore: _storesChatStore2['default'],
	            SurveyStore: _storesSurveyStore2['default']
	          }
	        },
	        _react2['default'].createElement(_componentsChatbox2['default'], null),
	        _react2['default'].createElement(_componentsResponsePane2['default'], { submitSurvey: this.submitSurvey }),
	        _react2['default'].createElement(_reactPikaday2['default'], null),
	        'derp'
	      );
	    }
	  }]);
	
	  return ChatContainer;
	})(_react2['default'].Component);
	
	exports['default'] = ChatContainer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.f71639b15e372d88b7e8.hot-update.js.map