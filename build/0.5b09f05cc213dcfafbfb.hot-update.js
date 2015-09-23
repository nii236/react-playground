webpackHotUpdate(0,{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsAlt = __webpack_require__(203);
	
	var _utilsAlt2 = _interopRequireDefault(_utilsAlt);
	
	var _sourcesSurveySource = __webpack_require__(218);
	
	var _sourcesSurveySource2 = _interopRequireDefault(_sourcesSurveySource);
	
	var _actionsSurveyActions = __webpack_require__(219);
	
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SurveyStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _actionsSurveyActions = __webpack_require__(219);
	
	var _actionsSurveyActions2 = _interopRequireDefault(_actionsSurveyActions);
	
	var _constantsSurveyJsx = __webpack_require__(220);
	
	var resolveFetchSurveyPromiseTimeout = function resolveFetchSurveyPromiseTimeout(resolve, reject) {
	
	  if (true) {
	    resolve(_constantsSurveyJsx.Day1Survey);
	  } else {
	    reject('Fetch survey failed');
	  }
	};
	
	var resolveSubmitSurveyPromiseTimeout = function resolveSubmitSurveyPromiseTimeout(resolve, reject, ChatStore, surveyID) {
	  if (true) {
	    console.log('Send user response: ', ChatStore.survey[surveyID]);
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SurveySource.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(66); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Enums = __webpack_require__(197);
	
	var _utilsDateFormatter = __webpack_require__(221);
	
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
	    content: 'Yesterday at work... I knew exactly what was expected of me.'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.Positive,
	    content: 'My supervisor(s) and I have meaningful conversations on a regular basis.'
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
	    content: 'Yesterday at work... I was under time pressure to finish my tasks.'
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
	    content: 'Yesterday at work... I completed my core tasks well.'
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
	    content: 'Right now... I am confident I can carry out my core tasks well.'
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
	    content: 'Right now... I am proud of the work that I do.'
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
	    content: 'Right now... I feel alert and awake.'
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
	    content: 'Yesterday at work... I knew exactly what was expected of me.'
	  },
	  response: {
	    type: _Enums.ResponseType.MultipleChoice,
	    choices: ['True', 'False']
	  },
	  drillDown: {
	    type: _Enums.DrillDownType.Positive,
	    content: 'My supervisor(s) and I have meaningful conversations on a regular basis.'
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
	    content: 'Yesterday at work... I was under time pressure to finish my tasks.'
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
	    content: 'Yesterday at work... I completed my core tasks well.'
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
	    content: 'Right now... I am confident I can carry out my core tasks well.'
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
	    content: 'Right now... I am proud of the work that I do.'
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
	    content: 'Right now... I feel alert and awake.'
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Survey.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 221:
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(189); if (makeExportsHot(module, __webpack_require__(66))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DateFormatter.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.5b09f05cc213dcfafbfb.hot-update.js.map