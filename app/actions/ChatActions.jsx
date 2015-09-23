import alt from '../utils/Alt';

class ChatActions {
  nextQuestion() {
    this.dispatch();
  }

  pushBotCall(message) {
    this.dispatch(message);
  }

  pushUserResponse(message) {
    this.dispatch(message);
  }

  pushBotDrillDownCall(message) {
    this.dispatch(message);
  }

  pushUserDrillDownResponse(message) {
    this.dispatch(message);
  }
}

export default alt.createActions(ChatActions);
