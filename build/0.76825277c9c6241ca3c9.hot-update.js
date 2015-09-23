webpackHotUpdate(0,{

/***/ 207:
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
	
	var _utilsGUID = __webpack_require__(206);
	
	var _utilsGUID2 = _interopRequireDefault(_utilsGUID);
	
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
	        this.handleClickSubmit();
	      }
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(event) {
	      this.setState({
	        EditText: event.target.value
	      });
	    }
	  }, {
	    key: 'handleClickSubmit',
	    value: function handleClickSubmit() {
	      var UserSelection = this.state.UserSelection;
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
	      var currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
	      var inputText = this.state.EditText;
	      if (inputText.length) {
	        UserSelection[inputText] = true;
	      }
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
	        choices.map(function (choice, index) {
	          var className = 'unselected';
	          var UserSelection = _this.state.UserSelection;
	          if (UserSelection[choice]) {
	            className = 'selected';
	          }
	          if (choice === 'Other') {
	            return _react2['default'].createElement('input', {
	              key: index,
	              onChange: _this.handleInputChange,
	              onKeyDown: _this.handleInputKeyDown,
	              placeholder: 'Your Comment',
	              type: 'text',
	              value: _this.state.EditText
	            });
	          } else {
	            return _react2['default'].createElement(
	              'div',
	              {
	                className: className,
	                key: index,
	                onClick: _this.handleClickSelection.bind(_this, choice)
	              },
	              choice
	            );
	          }
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseMultipleSelection.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.76825277c9c6241ca3c9.hot-update.js.map