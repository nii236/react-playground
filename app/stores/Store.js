import alt from '../utils/Alt';
import Source from '../sources/Source';
import Actions from '../actions/Actions';

class Store {
  constructor() {
    this.survey = [];
    this.bindListeners({
      handleFetchSurveyInProgress: Actions.FETCH_SURVEY_IN_PROGRESS,
      handleFetchSurveySuccess: Actions.FETCH_SURVEY_SUCCESS,
      handleFetchingSurveyFailed: Actions.FETCH_SURVEY_FAILED,
      handleDummyAction: Actions.DUMMY_ACTION
    });
    this.registerAsync(Source);
  }

  handleDummyAction(message) {
    console.log("DUMMY_ACTION")
  }

  handleFetchSurveyInProgress() {
    this.survey = [];
  }

  handleFetchSurveySuccess(survey) {
    this.survey = survey;
    this.errorMessage = null;
    this.surveyIsReady = true;

  }

  handleFetchingSurveyFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleSubmitSurveyInProgress() {
  }

  handleSubmitSurveyFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleSubmitSurveySuccess() {
  }
}

export default alt.createStore(Store, 'Store');
