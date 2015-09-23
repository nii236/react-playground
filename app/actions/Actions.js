import alt from '../utils/Alt';

class Actions {
  fetchSurveyInProgress() {
    this.dispatch();
  }

  fetchSurveySuccess(survey) {
    this.dispatch(survey);
  }

  fetchSurveyFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  dummyAction(message) {
    this.dispatch(message);
  }
}

export default alt.createActions(Actions);
