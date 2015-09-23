import alt from '../utils/Alt';

class SurveyActions {
  fetchSurveyInProgress() {
    this.dispatch();
  }

  fetchSurveySuccess(survey) {
    this.dispatch(survey);
    //ChatActions.pushBotCall(survey[0].call.content);
  }

  fetchSurveyFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  submitSurveyFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  submitSurveySuccess() {
    this.dispatch();
  }

  submitSurveyInProgress() {
    this.dispatch();
  }
}

export default alt.createActions(SurveyActions);
