import alt from '../utils/Alt';
import SurveySource from '../sources/SurveySource';
import SurveyActions from '../actions/SurveyActions';

class SurveyStore {
  constructor() {
    this.survey = [];
    this.bindListeners({
      handleFetchSurveyInProgress: SurveyActions.FETCH_SURVEY_IN_PROGRESS,
      handleFetchSurveySuccess: SurveyActions.FETCH_SURVEY_SUCCESS,
      handleFetchingSurveyFailed: SurveyActions.FETCH_SURVEY_FAILED,
      handleSubmitSurveyInProgress: SurveyActions.SUBMIT_SURVEY_IN_PROGRESS,
      handleSubmitSurveyFailed: SurveyActions.SUBMIT_SURVEY_FAILED,
      handleSubmitSurveySuccess: SurveyActions.SUBMIT_SURVEY_SUCCESS
    });
    this.registerAsync(SurveySource);
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

export default alt.createStore(SurveyStore, 'SurveyStore');
