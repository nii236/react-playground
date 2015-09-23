webpackHotUpdate(0,{

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
	    type: _Enums.DrillDownType.None,
	    content: 'Based on your previous data, you have been having trouble sleeping recently. Can you please tell us why?'
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

/***/ }

})
//# sourceMappingURL=0.33410bc54c01e0ffc4dc.hot-update.js.map