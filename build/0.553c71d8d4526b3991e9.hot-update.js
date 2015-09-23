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
	
	var _sourcesSurveySource = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../sources/SurveySource\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=0.553c71d8d4526b3991e9.hot-update.js.map