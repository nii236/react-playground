import alt from 'app/utils/Alt';

class Actions {
  fetchAsyncInProgress() {
    this.dispatch();
  }

  fetchAsyncSuccess(survey) {
    this.dispatch(survey);
  }

  fetchAsyncFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  dummyAction() {
    this.dispatch();
  }
}

export default alt.createActions(Actions);
