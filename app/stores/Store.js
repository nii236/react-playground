import alt from 'app/utils/Alt';
import Source from 'app/sources/Source';
import Actions from 'app/actions/Actions';

class Store {
  constructor() {
    this.survey = [];
    this.dummyState = {};
    this.errorMessage = "";
    this.bindListeners({
      handleFetchAsyncInProgress: Actions.FETCH_ASYNC_IN_PROGRESS,
      handleFetchAsyncSuccess: Actions.FETCH_ASYNC_SUCCESS,
      handleFetchAsyncFailed: Actions.FETCH_ASYNC_FAILED,
      handleDummyAction: Actions.DUMMY_ACTION
    });
    this.registerAsync(Source);
  }

  handleDummyAction() {
    if (this.dummyState.derp == 'derp') {
      this.dummyState.derp = 'not derp';
    } else {
      this.dummyState.derp = 'derp';
    }
  }

  handleFetchAsyncInProgress() {
  }

  handleFetchAsyncSuccess(survey) {
    console.log(survey);
  }

  handleFetchAsyncFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleSubmitSurveySuccess() {
  }
}

export default alt.createStore(Store, 'Store');
