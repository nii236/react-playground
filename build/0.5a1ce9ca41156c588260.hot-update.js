webpackHotUpdate(0,{

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
	    resolve(_constantsSurveyJsx.Day2Survey);
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

/***/ }

})
//# sourceMappingURL=0.5a1ce9ca41156c588260.hot-update.js.map