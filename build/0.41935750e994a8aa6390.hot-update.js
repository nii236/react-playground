webpackHotUpdate(0,{

/***/ 199:
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
	
	var UserResponseTextInput = (function (_React$Component) {
	  _inherits(UserResponseTextInput, _React$Component);
	
	  function UserResponseTextInput(props) {
	    _classCallCheck(this, UserResponseTextInput);
	
	    _get(Object.getPrototypeOf(UserResponseTextInput.prototype), 'constructor', this).call(this, props);
	    this.handleKeyDown = this.handleKeyDown.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	    this.handleSubmitResponse = this.handleSubmitResponse.bind(this);
	    this.state = {
	      FinishedEdit: false,
	      Editing: false,
	      Value: '',
	      EditText: '',
	      SubmitDisabled: true
	    };
	  }
	
	  _createClass(UserResponseTextInput, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var stringLength = event.target.value.length;
	      if (stringLength > 2) {
	        this.setState({
	          EditText: event.target.value,
	          SubmitDisabled: false
	        });
	      } else {
	        this.setState({
	          EditText: event.target.value,
	          SubmitDisabled: true
	        });
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var submitDisabled = this.state.SubmitDisabled;
	      if (!submitDisabled) {
	        this.handleSubmitResponse();
	      }
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(event) {
	      var submitDisabled = this.state.SubmitDisabled;
	      var ENTER_KEY = 13;
	      if (event.keyCode === ENTER_KEY && !submitDisabled) {
	        this.handleSubmitResponse();
	      }
	    }
	  }, {
	    key: 'handleSubmitResponse',
	    value: function handleSubmitResponse() {
	      var value = this.state.EditText;
	      var currentSurveyID = this.props.ChatStore.currentSurveyID;
	      var thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
	      var currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
	      if (currentlyDrillDown) {
	        this.props.ChatActions.pushUserDrillDownResponse(value);
	        this.props.submitSurvey(currentSurveyID);
	      } else {
	        this.props.ChatActions.pushUserResponse(value);
	        if (!thisSurveyIDHasDrillDown) {
	          this.props.submitSurvey(currentSurveyID);
	        }
	      }
	
	      this.setState({ EditText: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'UserResponseTextInput' },
	        _react2['default'].createElement('input', {
	          onChange: this.handleChange,
	          onKeyDown: this.handleKeyDown,
	          placeholder: 'Your Comment',
	          type: 'text',
	          value: this.state.EditText
	        }),
	        this.props.hideButton ? '' : _react2['default'].createElement('input', {
	          disabled: this.state.SubmitDisabled,
	          onClick: this.handleClick,
	          type: 'button',
	          value: 'Send'
	        }),
	        this.state.SubmitDisabled ? _react2['default'].createElement(
	          'div',
	          null,
	          'Please enter more than three characters'
	        ) : ''
	      );
	    }
	  }]);
	
	  return UserResponseTextInput;
	})(_react2['default'].Component);
	
	exports['default'] = UserResponseTextInput;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseTextInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.41935750e994a8aa6390.hot-update.js.map