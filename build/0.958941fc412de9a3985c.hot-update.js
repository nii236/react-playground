webpackHotUpdate(0,{

/***/ 201:
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
	
	var _constantsEnums = __webpack_require__(202);
	
	var _UserResponseFaceMood = __webpack_require__(203);
	
	var _UserResponseFaceMood2 = _interopRequireDefault(_UserResponseFaceMood);
	
	var _UserResponseTextInput = __webpack_require__(204);
	
	var _UserResponseTextInput2 = _interopRequireDefault(_UserResponseTextInput);
	
	var _UserResponseMultipleChoice = __webpack_require__(205);
	
	var _UserResponseMultipleChoice2 = _interopRequireDefault(_UserResponseMultipleChoice);
	
	var _UserResponseMultipleSelection = __webpack_require__(206);
	
	var _UserResponseMultipleSelection2 = _interopRequireDefault(_UserResponseMultipleSelection);
	
	var ResponsePane = (function (_React$Component) {
	  _inherits(ResponsePane, _React$Component);
	
	  function ResponsePane(props) {
	    _classCallCheck(this, ResponsePane);
	
	    _get(Object.getPrototypeOf(ResponsePane.prototype), 'constructor', this).call(this, props);
	    this.handleResponseType = this.handleResponseType.bind(this);
	  }
	
	  _createClass(ResponsePane, [{
	    key: 'handleResponseType',
	    value: function handleResponseType(currentSurveyCall) {
	      if (this.props.ChatStore.botThinking) {
	        return null;
	      }
	      if (this.props.ChatStore.currentlyDrillDown) {
	        switch (currentSurveyCall.drillDownResponse.type) {
	          case _constantsEnums.ResponseType.MultipleChoice:
	            return _react2['default'].createElement(_UserResponseMultipleChoice2['default'], this.props);
	          case _constantsEnums.ResponseType.MultipleSelection:
	            return _react2['default'].createElement(_UserResponseMultipleSelection2['default'], this.props);
	          default:
	            return _react2['default'].createElement(
	              'div',
	              null,
	              'Response Type Error'
	            );
	        }
	      } else {
	        switch (currentSurveyCall.response.type) {
	          case _constantsEnums.ResponseType.None:
	            return null;
	          case _constantsEnums.ResponseType.FaceMood:
	            return _react2['default'].createElement(_UserResponseFaceMood2['default'], this.props);
	          case _constantsEnums.ResponseType.TextEntry:
	            return _react2['default'].createElement(_UserResponseTextInput2['default'], this.props);
	          case _constantsEnums.ResponseType.MultipleChoice:
	            return _react2['default'].createElement(_UserResponseMultipleChoice2['default'], this.props);
	          case _constantsEnums.ResponseType.MultipleSelection:
	            return _react2['default'].createElement(_UserResponseMultipleSelection2['default'], this.props);
	          default:
	            return _react2['default'].createElement(
	              'div',
	              null,
	              'Response Type Error'
	            );
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var currentSurveyCall = this.props.ChatStore.survey[currentSurveyID];
	      return _react2['default'].createElement(
	        'div',
	        { className: 'ResponsePane' },
	        this.props.ChatStore.surveyIsReady ? this.handleResponseType(currentSurveyCall) : 'Please Wait...'
	      );
	    }
	  }]);
	
	  return ResponsePane;
	})(_react2['default'].Component);
	
	exports['default'] = ResponsePane;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ResponsePane.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 205:
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
	
	var _utilsGUID = __webpack_require__(230);
	
	var _utilsGUID2 = _interopRequireDefault(_utilsGUID);
	
	var _UserResponseTextInput = __webpack_require__(204);
	
	var _UserResponseTextInput2 = _interopRequireDefault(_UserResponseTextInput);
	
	var UserResponseMultipleChoice = (function (_React$Component) {
	  _inherits(UserResponseMultipleChoice, _React$Component);
	
	  function UserResponseMultipleChoice(props) {
	    _classCallCheck(this, UserResponseMultipleChoice);
	
	    _get(Object.getPrototypeOf(UserResponseMultipleChoice.prototype), 'constructor', this).call(this, props);
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  _createClass(UserResponseMultipleChoice, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
	      var currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
	
	      if (currentlyDrillDown) {
	        this.props.ChatActions.pushUserDrillDownResponse(event);
	        this.props.submitSurvey(currentSurveyID);
	      } else {
	        this.props.ChatActions.pushUserResponse(event);
	        if (!thisSurveyIDHasDrillDown) {
	          this.props.submitSurvey(currentSurveyID);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var currentSurvey = this.props.ChatStore.survey[currentSurveyID];
	      var currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
	      var choices = [];
	      if (currentlyDrillDown) {
	        choices = currentSurvey.drillDownResponse.choices;
	      } else {
	        choices = currentSurvey.response.choices;
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'UserResponseMultipleChoice' },
	        choices.map(function (Choice) {
	          console.log((0, _utilsGUID2['default'])());
	          if (Choice === 'Other') {
	            return _react2['default'].createElement(_UserResponseTextInput2['default'], _this.props);
	          } else {
	            return _react2['default'].createElement(
	              'div',
	              { onClick: _this.handleClick.bind(_this, Choice) },
	              Choice
	            );
	          }
	        })
	      );
	    }
	  }]);
	
	  return UserResponseMultipleChoice;
	})(_react2['default'].Component);
	
	exports['default'] = UserResponseMultipleChoice;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseMultipleChoice.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = guid;
	
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}
	
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "GUID.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.958941fc412de9a3985c.hot-update.js.map