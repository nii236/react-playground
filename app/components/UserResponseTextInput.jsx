import React from 'react';
export default class UserResponseTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitResponse = this.handleSubmitResponse.bind(this);
    this.state = {
      FinishedEdit: false,
      Editing: false,
      Value: '',
      EditText: '',
      SubmitDisabled: true
    };
  }

  handleChange(event) {
    const stringLength = event.target.value.length;
    const requiredLength = 1;
    if (stringLength > requiredLength) {
      this.setState({
        EditText: event.target.value,
        SubmitDisabled: false
      });
    } else {
      this.setState({
        EditText: event.target.value,
        SubmitDisabled: true
      });
    }
  }

  handleClick() {
    const submitDisabled = this.state.SubmitDisabled;
    if (!submitDisabled) {
      this.handleSubmitResponse();
    }
  }

  handleKeyDown(event) {
    const submitDisabled = this.state.SubmitDisabled;
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !submitDisabled) {
      this.handleSubmitResponse();
    }
  }

  handleSubmitResponse() {
    const value = this.state.EditText;
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
    if (currentlyDrillDown) {
      this.props.ChatActions.pushUserDrillDownResponse(value);
      this.props.submitSurvey(currentSurveyID);
    } else {
      this.props.ChatActions.pushUserResponse(value);
      if (!thisSurveyIDHasDrillDown) {
        this.props.submitSurvey(currentSurveyID);
      }
    }

    this.setState({EditText: ''});
  }

  render() {
    return (
      <div className='UserResponseTextInput'>
        <input
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            placeholder='Your Comment'
            type='text'
            value={this.state.EditText}
        />
        <input
            disabled={this.state.SubmitDisabled}
            onClick={this.handleClick}
            type='button'
            value='Send'
        />
        {this.state.SubmitDisabled ? <div>Please enter at least two characters</div> : ''}
      </div>
    );
  }
}
