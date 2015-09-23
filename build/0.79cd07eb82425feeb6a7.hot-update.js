webpackHotUpdate(0,{

/***/ 168:
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
	
	var _altAltContainer = __webpack_require__(169);
	
	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);
	
	var _componentsChatbox = __webpack_require__(192);
	
	var _componentsChatbox2 = _interopRequireDefault(_componentsChatbox);
	
	var _componentsResponsePane = __webpack_require__(201);
	
	var _componentsResponsePane2 = _interopRequireDefault(_componentsResponsePane);
	
	var _storesChatStore = __webpack_require__(208);
	
	var _storesChatStore2 = _interopRequireDefault(_storesChatStore);
	
	var _storesSurveyStore = __webpack_require__(223);
	
	var _storesSurveyStore2 = _interopRequireDefault(_storesSurveyStore);
	
	var _actionsChatActions = __webpack_require__(222);
	
	var _actionsChatActions2 = _interopRequireDefault(_actionsChatActions);
	
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
	        _react2['default'].createElement(_componentsResponsePane2['default'], { submitSurvey: this.submitSurvey })
	      );
	    }
	  }]);
	
	  return ChatContainer;
	})(_react2['default'].Component);
	
	exports['default'] = ChatContainer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 192:
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
	
	var _ErrorMessage = __webpack_require__(193);
	
	var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);
	
	var _LoadingMessage = __webpack_require__(197);
	
	var _LoadingMessage2 = _interopRequireDefault(_LoadingMessage);
	
	var _MessageBox = __webpack_require__(198);
	
	var _MessageBox2 = _interopRequireDefault(_MessageBox);
	
	var Chatbox = (function (_React$Component) {
	  _inherits(Chatbox, _React$Component);
	
	  function Chatbox(props) {
	    _classCallCheck(this, Chatbox);
	
	    _get(Object.getPrototypeOf(Chatbox.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Chatbox, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _this = this;
	
	      var surveyIsReady = this.props.ChatStore.surveyIsReady;
	      var chatLogLength = this.props.ChatStore.chatLog.length;
	      setTimeout(function () {
	        if (surveyIsReady && chatLogLength === 0) {
	          _this.props.ChatActions.pushBotCall();
	        }
	      }, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var chatLog = this.props.ChatStore.chatLog;
	      var botThinking = this.props.ChatStore.botThinking;
	      if (this.props.ChatStore.errorMessage) {
	        return _react2['default'].createElement(_ErrorMessage2['default'], null);
	      } else if (this.props.ChatStore.survey.length === 0) {
	        return _react2['default'].createElement(_LoadingMessage2['default'], null);
	      } else {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'ChatBox' },
	          chatLog.map(function (chatLog) {
	            return _react2['default'].createElement(_MessageBox2['default'], {
	              className: 'MessageContainer',
	              key: chatLog.id,
	              message: chatLog.message,
	              user: chatLog.user
	            });
	          }),
	          botThinking ? _react2['default'].createElement(
	            'div',
	            { className: 'BotThinking' },
	            '...'
	          ) : ''
	        );
	      }
	    }
	  }]);
	
	  return Chatbox;
	})(_react2['default'].Component);
	
	exports['default'] = Chatbox;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Chatbox.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 198:
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
	
	var _Avatar = __webpack_require__(199);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _marked = __webpack_require__(200);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var MessageBox = (function (_React$Component) {
	  _inherits(MessageBox, _React$Component);
	
	  function MessageBox(props) {
	    _classCallCheck(this, MessageBox);
	
	    _get(Object.getPrototypeOf(MessageBox.prototype), 'constructor', this).call(this, props);
	    this.processMarkdown = this.processMarkdown.bind(this);
	    this.processJSONMarkdown = this.processJSONMarkdown.bind(this);
	  }
	
	  _createClass(MessageBox, [{
	    key: 'processJSONMarkdown',
	    value: function processJSONMarkdown(markdown) {
	      var processedJSON = [];
	      for (var key in markdown) {
	        if (markdown[key]) {
	          var item = '- ' + key + '\n\r';
	          processedJSON.push(item);
	        }
	      }
	      if (processedJSON.length === 0) {
	        return 'None of the above';
	      }
	      return processedJSON.join('');
	    }
	  }, {
	    key: 'processMarkdown',
	    value: function processMarkdown(markdown) {
	      var markdownText = markdown;
	      if (typeof markdown === 'object') {
	        markdownText = this.processJSONMarkdown(markdown);
	      }
	      _marked2['default'].setOptions({
	        sanitize: true
	      });
	      var html = (0, _marked2['default'])(markdownText);
	      return { __html: html };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var avatarClasses = 'Avatar ' + this.props.user;
	      var messageClasses = 'ChatMessage ' + this.props.user;
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_Avatar2['default'], {
	          className: avatarClasses,
	          user: this.props.user
	        }),
	        _react2['default'].createElement('div', {
	          className: messageClasses,
	          dangerouslySetInnerHTML: this.processMarkdown(this.props.message)
	        })
	      );
	    }
	  }]);
	
	  return MessageBox;
	})(_react2['default'].Component);
	
	exports['default'] = MessageBox;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MessageBox.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

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
	
	var Avatar = (function (_React$Component) {
	  _inherits(Avatar, _React$Component);
	
	  function Avatar(props) {
	    _classCallCheck(this, Avatar);
	
	    _get(Object.getPrototypeOf(Avatar.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Avatar, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.position },
	        _react2['default'].createElement('img', {
	          alt: this.props.user,
	          href: this.props.url
	        })
	      );
	    }
	  }]);
	
	  return Avatar;
	})(_react2['default'].Component);
	
	exports['default'] = Avatar;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Avatar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	
	;(function() {
	
	/**
	 * Block-Level Grammar
	 */
	
	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};
	
	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();
	
	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();
	
	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();
	
	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
	
	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();
	
	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();
	
	/**
	 * Normal Block Grammar
	 */
	
	block.normal = merge({}, block);
	
	/**
	 * GFM Block Grammar
	 */
	
	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});
	
	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();
	
	/**
	 * GFM + Tables Block Grammar
	 */
	
	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});
	
	/**
	 * Block Lexer
	 */
	
	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;
	
	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}
	
	/**
	 * Expose Block Rules
	 */
	
	Lexer.rules = block;
	
	/**
	 * Static Lex Method
	 */
	
	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};
	
	/**
	 * Preprocessing
	 */
	
	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');
	
	  return this.token(src, true);
	};
	
	/**
	 * Lexing
	 */
	
	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;
	
	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }
	
	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }
	
	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }
	
	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }
	
	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }
	
	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);
	
	      this.tokens.push({
	        type: 'blockquote_start'
	      });
	
	      cap = cap[0].replace(/^ *> ?/gm, '');
	
	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);
	
	      this.tokens.push({
	        type: 'blockquote_end'
	      });
	
	      continue;
	    }
	
	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	
	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });
	
	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);
	
	      next = false;
	      l = cap.length;
	      i = 0;
	
	      for (; i < l; i++) {
	        item = cap[i];
	
	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }
	
	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }
	
	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }
	
	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });
	
	        // Recurse.
	        this.token(item, false, bq);
	
	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }
	
	      this.tokens.push({
	        type: 'list_end'
	      });
	
	      continue;
	    }
	
	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }
	
	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }
	
	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return this.tokens;
	};
	
	/**
	 * Inline-Level Grammar
	 */
	
	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};
	
	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();
	
	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();
	
	/**
	 * Normal Inline Grammar
	 */
	
	inline.normal = merge({}, inline);
	
	/**
	 * Pedantic Inline Grammar
	 */
	
	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});
	
	/**
	 * GFM Inline Grammar
	 */
	
	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});
	
	/**
	 * GFM + Line Breaks Inline Grammar
	 */
	
	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});
	
	/**
	 * Inline Lexer & Compiler
	 */
	
	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;
	
	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }
	
	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}
	
	/**
	 * Expose Inline Rules
	 */
	
	InlineLexer.rules = inline;
	
	/**
	 * Static Lexing/Compiling Method
	 */
	
	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};
	
	/**
	 * Lexing/Compiling
	 */
	
	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;
	
	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }
	
	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }
	
	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }
	
	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }
	
	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }
	
	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }
	
	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return out;
	};
	
	/**
	 * Compile Link
	 */
	
	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;
	
	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};
	
	/**
	 * Smartypants Transformations
	 */
	
	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};
	
	/**
	 * Mangle Links
	 */
	
	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;
	
	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }
	
	  return out;
	};
	
	/**
	 * Renderer
	 */
	
	function Renderer(options) {
	  this.options = options || {};
	}
	
	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }
	
	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }
	
	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};
	
	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};
	
	Renderer.prototype.html = function(html) {
	  return html;
	};
	
	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};
	
	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};
	
	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};
	
	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};
	
	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};
	
	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};
	
	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};
	
	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};
	
	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};
	
	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};
	
	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};
	
	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};
	
	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};
	
	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};
	
	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};
	
	Renderer.prototype.text = function(text) {
	  return text;
	};
	
	/**
	 * Parsing & Compiling
	 */
	
	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}
	
	/**
	 * Static Parse Method
	 */
	
	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};
	
	/**
	 * Parse Loop
	 */
	
	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();
	
	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }
	
	  return out;
	};
	
	/**
	 * Next Token
	 */
	
	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};
	
	/**
	 * Preview Next Token
	 */
	
	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};
	
	/**
	 * Parse Text Tokens
	 */
	
	Parser.prototype.parseText = function() {
	  var body = this.token.text;
	
	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }
	
	  return this.inline.output(body);
	};
	
	/**
	 * Parse Current Token
	 */
	
	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;
	
	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);
	
	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];
	
	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }
	
	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';
	
	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;
	
	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};
	
	/**
	 * Helpers
	 */
	
	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}
	
	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}
	
	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	function noop() {}
	noop.exec = noop;
	
	function merge(obj) {
	  var i = 1
	    , target
	    , key;
	
	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	
	/**
	 * Marked
	 */
	
	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }
	
	    opt = merge({}, marked.defaults, opt || {});
	
	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;
	
	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }
	
	    pending = tokens.length;
	
	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }
	
	      var out;
	
	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }
	
	      opt.highlight = highlight;
	
	      return err
	        ? callback(err)
	        : callback(null, out);
	    };
	
	    if (!highlight || highlight.length < 3) {
	      return done();
	    }
	
	    delete opt.highlight;
	
	    if (!pending) return done();
	
	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }
	
	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}
	
	/**
	 * Options
	 */
	
	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};
	
	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};
	
	/**
	 * Expose
	 */
	
	marked.Parser = Parser;
	marked.parser = Parser.parse;
	
	marked.Renderer = Renderer;
	
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	
	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;
	
	marked.parse = marked;
	
	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}
	
	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

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
	
	var _constantsEnums = __webpack_require__(202);
	
	var _UserResponseFaceMood = __webpack_require__(203);
	
	var _UserResponseFaceMood2 = _interopRequireDefault(_UserResponseFaceMood);
	
	var _UserResponseTextInput = __webpack_require__(204);
	
	var _UserResponseTextInput2 = _interopRequireDefault(_UserResponseTextInput);
	
	var _UserResponseMultipleChoice = __webpack_require__(205);
	
	var _UserResponseMultipleChoice2 = _interopRequireDefault(_UserResponseMultipleChoice);
	
	var _UserResponseMultipleSelection = __webpack_require__(207);
	
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

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ResponseType = {
	  None: 0,
	  HoursSlept: 1,
	  FaceMood: 2,
	  TextEntry: 3,
	  SubmitSurvey: 4,
	  MultipleChoice: 5,
	  MultipleSelection: 6,
	  Unknown: 7
	};
	
	exports.ResponseType = ResponseType;
	var DrillDownType = {
	  None: 0,
	  Positive: 1,
	  Negative: 2
	};
	
	exports.DrillDownType = DrillDownType;
	var CallType = {
	  Question: 0,
	  Statement: 1
	};
	
	exports.CallType = CallType;
	var SurveyType = {
	  Recovery: 0,
	  JobResources: 1,
	  JobDemands: 2,
	  WorkBehaviours: 3,
	  PersonalBehaviours: 4,
	  Engagement: 5,
	  Affect: 6
	};
	exports.SurveyType = SurveyType;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Enums.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 203:
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
	
	var UserResponseFaceMood = (function (_React$Component) {
	  _inherits(UserResponseFaceMood, _React$Component);
	
	  function UserResponseFaceMood(props) {
	    _classCallCheck(this, UserResponseFaceMood);
	
	    _get(Object.getPrototypeOf(UserResponseFaceMood.prototype), 'constructor', this).call(this, props);
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  _createClass(UserResponseFaceMood, [{
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
	      return _react2['default'].createElement(
	        'div',
	        { className: 'UserResponseFaceMood' },
	        _react2['default'].createElement('button', { onClick: this.handleClick.bind(this, '![sad](/assets/face-happy.svg)') }),
	        _react2['default'].createElement('button', { onClick: this.handleClick.bind(this, '![sad](/assets/face-meh.svg)') }),
	        _react2['default'].createElement('button', { onClick: this.handleClick.bind(this, '![sad](/assets/face-sad.svg)') })
	      );
	    }
	  }]);
	
	  return UserResponseFaceMood;
	})(_react2['default'].Component);
	
	exports['default'] = UserResponseFaceMood;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseFaceMood.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 204:
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
	      var requiredLength = 1;
	      if (stringLength > requiredLength) {
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
	        _react2['default'].createElement('input', {
	          disabled: this.state.SubmitDisabled,
	          onClick: this.handleClick,
	          type: 'button',
	          value: 'Send'
	        }),
	        this.state.SubmitDisabled ? _react2['default'].createElement(
	          'div',
	          null,
	          'Please enter at least two characters'
	        ) : ''
	      );
	    }
	  }]);
	
	  return UserResponseTextInput;
	})(_react2['default'].Component);
	
	exports['default'] = UserResponseTextInput;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserResponseTextInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(66);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsGUID = __webpack_require__(206);
	
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
	        choices.map(function (choice, index) {
	          if (choice === 'Other') {
	            return _react2['default'].createElement(_UserResponseTextInput2['default'], _extends({
	              key: index
	            }, _this.props));
	          } else {
	            return _react2['default'].createElement(
	              'div',
	              {
	                key: index,
	                onClick: _this.handleClick.bind(_this, choice)
	              },
	              choice
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

/***/ 206:
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

/***/ },

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

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsAlt = __webpack_require__(209);
	
	var _utilsAlt2 = _interopRequireDefault(_utilsAlt);
	
	var _actionsChatActions = __webpack_require__(222);
	
	var _actionsChatActions2 = _interopRequireDefault(_actionsChatActions);
	
	var _SurveyStore = __webpack_require__(223);
	
	var _SurveyStore2 = _interopRequireDefault(_SurveyStore);
	
	var _actionsSurveyActions = __webpack_require__(225);
	
	var _actionsSurveyActions2 = _interopRequireDefault(_actionsSurveyActions);
	
	var _constantsEnums = __webpack_require__(202);
	
	var ChatStore = (function () {
	  function ChatStore() {
	    _classCallCheck(this, ChatStore);
	
	    this.chatLog = [];
	    this.botThinking = false;
	    this.currentSurveyID = 0;
	    this.chatLogID = 0;
	    this.surveyIsReady = false;
	    this.survey = [];
	    this.errorMessage = null;
	    this.currentlyDrillDown = false;
	    this.images = {
	      user: 'placeholder',
	      bot: 'placeholder'
	    };
	    this.submitSurvey = {
	      disableSubmitButton: false,
	      message: 'Submit'
	    };
	    this.bindListeners({
	      handlePushUserResponse: _actionsChatActions2['default'].PUSH_USER_RESPONSE,
	      handlePushBotCall: _actionsChatActions2['default'].PUSH_BOT_CALL,
	      handlePushBotDrillDownCall: _actionsChatActions2['default'].PUSH_BOT_DRILL_DOWN_CALL,
	      handlePushUserDrillDownResponse: _actionsChatActions2['default'].PUSH_USER_DRILL_DOWN_RESPONSE,
	      handleFetchSurveySuccess: _actionsSurveyActions2['default'].FETCH_SURVEY_SUCCESS
	    });
	  }
	
	  _createClass(ChatStore, [{
	    key: 'handleFetchSurveySuccess',
	    value: function handleFetchSurveySuccess() {
	      this.waitFor(_SurveyStore2['default']);
	      var survey = _SurveyStore2['default'].getState().survey;
	      this.survey = survey;
	      this.surveyIsReady = true;
	    }
	  }, {
	    key: 'handlePushBotCall',
	    value: function handlePushBotCall() {
	      this.currentlyDrillDown = false;
	      this.botThinking = false;
	      this.chatLog.push({ id: this.chatLogID, message: this.survey[this.currentSurveyID].call.content, user: 'bot' });
	      this.chatLogID += 1;
	    }
	  }, {
	    key: 'handlePushUserResponse',
	    value: function handlePushUserResponse(message) {
	      var chatBotDelay = (Math.random() + 0.5) * 500;
	      this.survey[this.currentSurveyID].response.content = message;
	      this.chatLog.push({ id: this.chatLogID, message: message, user: 'user' });
	      this.chatLogID += 1;
	      this.botThinking = true;
	      setTimeout(function () {
	        _actionsChatActions2['default'].pushBotDrillDownCall();
	      }, chatBotDelay);
	    }
	  }, {
	    key: 'handlePushBotDrillDownCall',
	    value: function handlePushBotDrillDownCall() {
	      if (this.survey[this.currentSurveyID].drillDown.type !== _constantsEnums.DrillDownType.None) {
	        this.currentlyDrillDown = true;
	        this.botThinking = false;
	        this.chatLog.push({ id: this.chatLogID, message: this.survey[this.currentSurveyID].drillDown.content, user: 'bot' });
	        this.chatLogID += 1;
	      } else {
	        var chatBotDelay = (Math.random() + 0.5) * 200;
	        this.chatLogID += 1;
	        this.currentSurveyID += 1;
	        setTimeout(function () {
	          _actionsChatActions2['default'].pushBotCall();
	        }, chatBotDelay);
	      }
	    }
	  }, {
	    key: 'handlePushUserDrillDownResponse',
	    value: function handlePushUserDrillDownResponse(message) {
	      var chatBotDelay = (Math.random() + 0.5) * 500;
	      this.survey[this.currentSurveyID].drillDownResponse.content = message;
	      this.currentSurveyID += 1;
	      this.chatLog.push({ id: this.chatLogID, message: message, user: 'user' });
	      this.chatLogID += 1;
	      this.botThinking = true;
	      setTimeout(function () {
	        _actionsChatActions2['default'].pushBotCall();
	      }, chatBotDelay);
	    }
	  }]);
	
	  return ChatStore;
	})();
	
	exports['default'] = _utilsAlt2['default'].createStore(ChatStore, 'ChatStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ChatStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsAlt = __webpack_require__(209);
	
	var _utilsAlt2 = _interopRequireDefault(_utilsAlt);
	
	var ChatActions = (function () {
	  function ChatActions() {
	    _classCallCheck(this, ChatActions);
	  }
	
	  _createClass(ChatActions, [{
	    key: 'nextQuestion',
	    value: function nextQuestion() {
	      this.dispatch();
	    }
	  }, {
	    key: 'pushBotCall',
	    value: function pushBotCall(message) {
	      this.dispatch(message);
	    }
	  }, {
	    key: 'pushUserResponse',
	    value: function pushUserResponse(message) {
	      this.dispatch(message);
	    }
	  }, {
	    key: 'pushBotDrillDownCall',
	    value: function pushBotDrillDownCall(message) {
	      this.dispatch(message);
	    }
	  }, {
	    key: 'pushUserDrillDownResponse',
	    value: function pushUserDrillDownResponse(message) {
	      this.dispatch(message);
	    }
	  }]);
	
	  return ChatActions;
	})();
	
	exports['default'] = _utilsAlt2['default'].createActions(ChatActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ChatActions.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsAlt = __webpack_require__(209);
	
	var _utilsAlt2 = _interopRequireDefault(_utilsAlt);
	
	var _sourcesSurveySource = __webpack_require__(224);
	
	var _sourcesSurveySource2 = _interopRequireDefault(_sourcesSurveySource);
	
	var _actionsSurveyActions = __webpack_require__(225);
	
	var _actionsSurveyActions2 = _interopRequireDefault(_actionsSurveyActions);
	
	var SurveyStore = (function () {
	  function SurveyStore() {
	    _classCallCheck(this, SurveyStore);
	
	    this.survey = [];
	    this.bindListeners({
	      handleFetchSurveyInProgress: _actionsSurveyActions2['default'].FETCH_SURVEY_IN_PROGRESS,
	      handleFetchSurveySuccess: _actionsSurveyActions2['default'].FETCH_SURVEY_SUCCESS,
	      handleFetchingSurveyFailed: _actionsSurveyActions2['default'].FETCH_SURVEY_FAILED,
	      handleSubmitSurveyInProgress: _actionsSurveyActions2['default'].SUBMIT_SURVEY_IN_PROGRESS,
	      handleSubmitSurveyFailed: _actionsSurveyActions2['default'].SUBMIT_SURVEY_FAILED,
	      handleSubmitSurveySuccess: _actionsSurveyActions2['default'].SUBMIT_SURVEY_SUCCESS
	    });
	    this.registerAsync(_sourcesSurveySource2['default']);
	  }
	
	  _createClass(SurveyStore, [{
	    key: 'handleFetchSurveyInProgress',
	    value: function handleFetchSurveyInProgress() {
	      this.survey = [];
	    }
	  }, {
	    key: 'handleFetchSurveySuccess',
	    value: function handleFetchSurveySuccess(survey) {
	      this.survey = survey;
	      this.errorMessage = null;
	      this.surveyIsReady = true;
	    }
	  }, {
	    key: 'handleFetchingSurveyFailed',
	    value: function handleFetchingSurveyFailed(errorMessage) {
	      this.errorMessage = errorMessage;
	    }
	  }, {
	    key: 'handleSubmitSurveyInProgress',
	    value: function handleSubmitSurveyInProgress() {}
	  }, {
	    key: 'handleSubmitSurveyFailed',
	    value: function handleSubmitSurveyFailed(errorMessage) {
	      this.errorMessage = errorMessage;
	    }
	  }, {
	    key: 'handleSubmitSurveySuccess',
	    value: function handleSubmitSurveySuccess() {}
	  }]);
	
	  return SurveyStore;
	})();
	
	exports['default'] = _utilsAlt2['default'].createStore(SurveyStore, 'SurveyStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SurveyStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _actionsSurveyActions = __webpack_require__(225);
	
	var _actionsSurveyActions2 = _interopRequireDefault(_actionsSurveyActions);
	
	var _utilsLogger = __webpack_require__(226);
	
	var _utilsLogger2 = _interopRequireDefault(_utilsLogger);
	
	var _constantsSurveyJsx = __webpack_require__(227);
	
	var resolveFetchSurveyPromiseTimeout = function resolveFetchSurveyPromiseTimeout(resolve, reject) {
	  var fetchSuccess = true;
	  if (fetchSuccess) {
	    resolve(_constantsSurveyJsx.Day1Survey);
	  } else {
	    reject('Fetch survey failed');
	  }
	};
	
	var resolveSubmitSurveyPromiseTimeout = function resolveSubmitSurveyPromiseTimeout(resolve, reject, ChatStore, surveyID) {
	  var submitSuccess = true;
	  if (submitSuccess) {
	    _utilsLogger2['default'].LogMessageAndObject('Send user response:', ChatStore.survey[surveyID]);
	    // console.log('Send user response: ', ChatStore.survey[surveyID]);
	  } else {
	      reject('Submit survey failed');
	    }
	};
	
	var SurveySource = function SurveySource() {
	
	  return {
	    fetchSurvey: function fetchSurvey() {
	      return {
	        remote: function remote() {
	          return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	              resolveFetchSurveyPromiseTimeout(resolve, reject);
	            }, 500);
	          });
	        },
	        local: function local() {
	          return null;
	        },
	        loading: _actionsSurveyActions2['default'].fetchSurveyInProgress,
	        success: _actionsSurveyActions2['default'].fetchSurveySuccess,
	        error: _actionsSurveyActions2['default'].fetchSurveyFailed
	      };
	    },
	    submitSurvey: function submitSurvey() {
	      return {
	        remote: function remote(ChatStore, surveyID) {
	          return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	              resolveSubmitSurveyPromiseTimeout(resolve, reject, ChatStore, surveyID);
	            }, 500);
	          });
	        },
	        local: function local() {
	          return null;
	        },
	        loading: _actionsSurveyActions2['default'].submitSurveyInProgress,
	        success: _actionsSurveyActions2['default'].submitSurveySuccess,
	        error: _actionsSurveyActions2['default'].submitSurveyFailed
	      };
	    }
	  };
	};
	
	exports['default'] = SurveySource;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SurveySource.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsAlt = __webpack_require__(209);
	
	var _utilsAlt2 = _interopRequireDefault(_utilsAlt);
	
	var SurveyActions = (function () {
	  function SurveyActions() {
	    _classCallCheck(this, SurveyActions);
	  }
	
	  _createClass(SurveyActions, [{
	    key: 'fetchSurveyInProgress',
	    value: function fetchSurveyInProgress() {
	      this.dispatch();
	    }
	  }, {
	    key: 'fetchSurveySuccess',
	    value: function fetchSurveySuccess(survey) {
	      this.dispatch(survey);
	      //ChatActions.pushBotCall(survey[0].call.content);
	    }
	  }, {
	    key: 'fetchSurveyFailed',
	    value: function fetchSurveyFailed(errorMessage) {
	      this.dispatch(errorMessage);
	    }
	  }, {
	    key: 'submitSurveyFailed',
	    value: function submitSurveyFailed(errorMessage) {
	      this.dispatch(errorMessage);
	    }
	  }, {
	    key: 'submitSurveySuccess',
	    value: function submitSurveySuccess() {
	      this.dispatch();
	    }
	  }, {
	    key: 'submitSurveyInProgress',
	    value: function submitSurveyInProgress() {
	      this.dispatch();
	    }
	  }]);
	
	  return SurveyActions;
	})();
	
	exports['default'] = _utilsAlt2['default'].createActions(SurveyActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SurveyActions.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Logger = (function () {
	  function Logger() {
	    _classCallCheck(this, Logger);
	  }
	
	  _createClass(Logger, null, [{
	    key: 'LogInfo',
	    value: function LogInfo(message) {
	      if (true) {
	        console.info(message);
	      }
	    }
	  }, {
	    key: 'LogMessageAndObject',
	    value: function LogMessageAndObject(message, object) {
	      if (true) {
	        console.info(message, object);
	      }
	    }
	  }, {
	    key: 'LogObject',
	    value: function LogObject(object) {
	      if (true) {
	        console.info(object);
	      }
	    }
	  }]);
	
	  return Logger;
	})();
	
	exports['default'] = Logger;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Logger.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Enums = __webpack_require__(202);
	
	var _utilsDateFormatter = __webpack_require__(228);
	
	var _utilsDateFormatter2 = _interopRequireDefault(_utilsDateFormatter);
	
	var time = new _utilsDateFormatter2['default']();
	var Day1Survey = [{
	  id: 0,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Good morning! You\'ve started at ' + time.getTime() + '.\n**How are you feeling today?**'
	  },
	  response: {
	    type: _Enums.ResponseType.FaceMood
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 1,
	  type: _Enums.SurveyType.Recovery,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Thanks for letting me know! \n**How many hours of sleep did you get last night?**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['More than 8', '6-8 hours', '4-6 hours', '2-4 hours', '0-2 hours']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.Negative,
	    content: 'Based on your previous data, you have been having trouble sleeping recently. Can you please tell us why?'
	  },
	  drillDownResponse: {
	    type: _Enums.ResponseType.MultipleSelection,
	    choices: ['I could not breathe comfortably', 'I had problems falling asleep', 'The room temperature was not right', 'The room was too noisy', 'The bed was uncomfortable', 'I was not feeling well', 'I am feeling very stressed in this period', 'Other']
	  }
	}, {
	  id: 2,
	  type: _Enums.SurveyType.JobResources,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **I knew exactly what was expected of me.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.Positive,
	    content: 'My supervisor(s) and I have **meaningful conversations on a regular basis.**'
	  },
	  drillDownResponse: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  }
	}, {
	  id: 3,
	  type: _Enums.SurveyType.JobDemands,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **I was under time pressure to finish my tasks.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 4,
	  type: _Enums.SurveyType.WorkBehaviours,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **I completed my core tasks well.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.Negative,
	    content: 'Please choose the options below that apply to you.'
	  },
	  drillDownResponse: {
	    type: _Enums.ResponseType.MultipleSelection,
	    choices: ['Yesterday, the amount of tasks I had to carry out did not allow me to care about health and safety.', 'Yesterday, I was too fatigued to care about health and safety.']
	  }
	}, {
	  id: 5,
	  type: _Enums.SurveyType.PersonalBehaviours,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **I am confident I can carry out my core tasks well.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 6,
	  type: _Enums.SurveyType.Engagement,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **I am proud of the work that I do.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 7,
	  type: _Enums.SurveyType.Affect,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **I feel alert and awake.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 8,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Do you have **any other comments** you would like to make?'
	  },
	  response: {
	    type: _Enums.ResponseType.TextEntry
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None,
	    content: ''
	  }
	}, {
	  id: 9,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Thanks for letting me know! I will see you next time!'
	  },
	  response: {
	    type: _Enums.ResponseType.None
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None,
	    content: ''
	  }
	}];
	
	exports.Day1Survey = Day1Survey;
	var Day2Survey = [{
	  id: 0,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Good morning! You\'ve started at ' + time.getTime() + '.\n**How are you feeling today?**'
	  },
	  response: {
	    type: _Enums.ResponseType.FaceMood
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 1,
	  type: _Enums.SurveyType.Recovery,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Thanks for letting me know! \n**What was the quality of your sleep last night?**'
	  },
	  response: {
	    type: _Enums.ResponseType.FaceMood
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 2,
	  type: _Enums.SurveyType.JobResources,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **I felt like I could decide for myself how to do my work.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 3,
	  type: _Enums.SurveyType.JobDemands,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **The amount of work I was expected to do was great.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 4,
	  type: _Enums.SurveyType.WorkBehaviours,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Yesterday at work... **I adapted well to changes in my core tasks.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 5,
	  type: _Enums.SurveyType.PersonalBehaviours,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **I would feel confident analyzing a long-term problem to find a solution**.'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 6,
	  type: _Enums.SurveyType.Engagement,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **My work is meaningful to me.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 7,
	  type: _Enums.SurveyType.Affect,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Right now... **I feel enthusiastic.**'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None
	  }
	}, {
	  id: 8,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Do you have **any other comments** you would like to make?'
	  },
	  response: {
	    type: _Enums.ResponseType.TextEntry
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None,
	    content: ''
	  }
	}, {
	  id: 9,
	  call: {
	    type: _Enums.CallType.Question,
	    content: 'Thanks for letting me know! I will see you next time!'
	  },
	  response: {
	    type: _Enums.ResponseType.None
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.None,
	    content: ''
	  }
	}];
	exports.Day2Survey = Day2Survey;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Survey.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var DateFormatter = (function () {
	  function DateFormatter() {
	    _classCallCheck(this, DateFormatter);
	
	    this.datetime = new Date();
	  }
	
	  _createClass(DateFormatter, [{
	    key: 'getDate',
	    value: function getDate() {
	      var date = this.datetime.getDays() + '/' + this.datetime.getMonths() + '/' + this.datetime.getYears();
	      return date;
	    }
	  }, {
	    key: 'getTime',
	    value: function getTime() {
	      var time = '';
	      var hours = this.datetime.getHours();
	      var minutes = this.datetime.getMinutes();
	      if (minutes < 10) {
	        minutes = '0' + minutes;
	      }
	
	      if (hours > 11) {
	        time = hours - 12 + ':' + minutes + 'pm';
	      } else {
	        time = hours + ':' + minutes + 'am';
	      }
	
	      return time;
	    }
	  }]);
	
	  return DateFormatter;
	})();
	
	exports['default'] = DateFormatter;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(194); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DateFormatter.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.79cd07eb82425feeb6a7.hot-update.js.map