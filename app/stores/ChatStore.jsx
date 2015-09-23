import alt from '../utils/Alt';
import ChatActions from '../actions/ChatActions';
import SurveyStore from './SurveyStore';
import SurveyActions from '../actions/SurveyActions';
import {DrillDownType} from '../constants/Enums';

class ChatStore {
  constructor() {
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
      handlePushUserResponse: ChatActions.PUSH_USER_RESPONSE,
      handlePushBotCall: ChatActions.PUSH_BOT_CALL,
      handlePushBotDrillDownCall: ChatActions.PUSH_BOT_DRILL_DOWN_CALL,
      handlePushUserDrillDownResponse: ChatActions.PUSH_USER_DRILL_DOWN_RESPONSE,
      handleFetchSurveySuccess: SurveyActions.FETCH_SURVEY_SUCCESS
    });
  }

  handleFetchSurveySuccess() {
    this.waitFor(SurveyStore);
    const survey = SurveyStore.getState().survey;
    this.survey = survey;
    this.surveyIsReady = true;
  }

  handlePushBotCall() {
    this.currentlyDrillDown = false;
    this.botThinking = false;
    this.chatLog.push({id: this.chatLogID, message: this.survey[this.currentSurveyID].call.content, user: 'bot'});
    this.chatLogID += 1;
  }

  handlePushUserResponse(message) {
    const chatBotDelay = (Math.random()+0.5)*500;
    this.survey[this.currentSurveyID].response.content = message;
    this.chatLog.push({id: this.chatLogID, message: message, user: 'user'});
    this.chatLogID += 1;
    this.botThinking = true;
    setTimeout(() => {
      ChatActions.pushBotDrillDownCall();
    }, chatBotDelay);
  }

  handlePushBotDrillDownCall() {
    if (this.survey[this.currentSurveyID].drillDown.type !== DrillDownType.None) {
      this.currentlyDrillDown = true;
      this.botThinking = false;
      this.chatLog.push({id: this.chatLogID, message: this.survey[this.currentSurveyID].drillDown.content, user: 'bot'});
      this.chatLogID += 1;
    } else {
      const chatBotDelay = (Math.random()+0.5)*200;
      this.chatLogID += 1;
      this.currentSurveyID += 1;
      setTimeout(() => {
        ChatActions.pushBotCall();
      }, chatBotDelay);
    }
  }

  handlePushUserDrillDownResponse(message) {
    const chatBotDelay = (Math.random()+0.5)*500;
    this.survey[this.currentSurveyID].drillDownResponse.content = message;
    this.currentSurveyID += 1;
    this.chatLog.push({id: this.chatLogID, message: message, user: 'user'});
    this.chatLogID += 1;
    this.botThinking = true;
    setTimeout(() => {
      ChatActions.pushBotCall();
    }, chatBotDelay);
  }
}

export default alt.createStore(ChatStore, 'ChatStore');
