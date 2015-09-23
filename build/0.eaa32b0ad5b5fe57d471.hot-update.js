webpackHotUpdate(0,{

/***/ 196:
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
	
	var _constantsEnums = __webpack_require__(197);
	
	var _UserResponseFaceMood = __webpack_require__(198);
	
	var _UserResponseFaceMood2 = _interopRequireDefault(_UserResponseFaceMood);
	
	var _UserResponseTextInput = __webpack_require__(199);
	
	var _UserResponseTextInput2 = _interopRequireDefault(_UserResponseTextInput);
	
	var _UserResponseMultipleChoice = __webpack_require__(200);
	
	var _UserResponseMultipleChoice2 = _interopRequireDefault(_UserResponseMultipleChoice);
	
	var _UserResponseMultipleSelection = __webpack_require__(201);
	
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ResponsePane.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

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
	
	var _UserResponseTextInput = __webpack_require__(199);
	
	var _UserResponseTextInput2 = _interopRequireDefault(_UserResponseTextInput);
	
	var UserResponseMultipleSelection = (function (_React$Component) {
	  _inherits(UserResponseMultipleSelection, _React$Component);
	
	  function UserResponseMultipleSelection(props) {
	    _classCallCheck(this, UserResponseMultipleSelection);
	
	    _get(Object.getPrototypeOf(UserResponseMultipleSelection.prototype), 'constructor', this).call(this, props);
	    this.handleClickSelection = this.handleClickSelection.bind(this);
	    this.handleClickSubmit = this.handleClickSubmit.bind(this);
	    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.state = {
	      UserSelection: {},
	      FinishedEdit: false,
	      Editing: false,
	      Value: '',
	      EditText: '',
	      SubmitDisabled: false
	    };
	  }
	
	  _createClass(UserResponseMultipleSelection, [{
	    key: 'handleClickSelection',
	    value: function handleClickSelection(event) {
	      var UserSelection = this.state.UserSelection;
	      if (UserSelection[event]) {
	        UserSelection[event] = false;
	      } else {
	        UserSelection[event] = true;
	      }
	      this.setState({ UserSelection: UserSelection });
	    }
	  }, {
	    key: 'handleInputKeyDown',
	    value: function handleInputKeyDown(event) {
	      var ENTER_KEY = 13;
	      if (event.keyCode === ENTER_KEY) {
	        this.handleSubmitResponse();
	      }
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(event) {
	      this.setState({
	        EditText: event.target.value,
	        SubmitDisabled: true
	      });
	    }
	  }, {
	    key: 'handleClickSubmit',
	    value: function handleClickSubmit() {
	      var UserSelection = this.state.UserSelection;
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
	      var currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
	
	      if (currentlyDrillDown) {
	        this.props.ChatActions.pushUserDrillDownResponse(UserSelection);
	        this.props.submitSurvey(currentSurveyID);
	      } else {
	        this.props.ChatActions.pushUserResponse(UserSelection);
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
	        { className: 'UserResponseMultipleSelection' },
	        choices.map(function (Choice) {
	          var className = 'disabled';
	          var UserSelection = _this.state.UserSelection;
	          if (UserSelection[Choice]) {
	            className = 'enabled';
	          }
	          if (Choice === 'Other') {
	            return _react2['default'].createElement('input', {
	              onChange: _this.handleInputChange,
	              onKeyDown: _this.handleInputKeyDown,
	              placeholder: 'Your Comment',
	              type: 'text',
	              value: _this.state.EditText
	            });
	          }
	          return _react2['default'].createElement(
	            'div',
	            {
	              className: className,
	              onClick: _this.handleClickSelection.bind(_this, Choice)
	            },
	            Choice
	          );
	        }),
	        _react2['default'].createElement('input', {
	          disabled: this.state.SubmitDisabled,
	          onClick: this.handleClickSubmit,
	          type: 'button',
	          value: 'Send'
	        })
	      );
	    }
	  }]);
	
	  return UserResponseMultipleSelection;
	})(_react2['default'].Component);
	
	exports['default'] = UserResponseMultipleSelection;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseMultipleSelection.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.eaa32b0ad5b5fe57d471.hot-update.js.map