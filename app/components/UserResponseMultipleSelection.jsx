import React from 'react';
import guid from '../utils/GUID';
export default class UserResponseMultipleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSelection = this.handleClickSelection.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      UserSelection: {},
      Editing: false,
      Value: '',
      EditText: '',
      SubmitDisabled: false
    };
  }
  
  handleClickSelection(event) {
    const UserSelection = this.state.UserSelection;
    if (UserSelection[event]) {
      UserSelection[event] = false;
    } else {
      UserSelection[event] = true;
    }
    this.setState({UserSelection: UserSelection});
  }

  handleInputKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      this.handleClickSubmit();
    }
  }

  handleInputChange(event) {
    this.setState({
      EditText: event.target.value
    });
  }

  handleClickSubmit() {
    const UserSelection = this.state.UserSelection;
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
    const inputText = this.state.EditText;
    if (inputText.length) {
      UserSelection[inputText] = true;
    }
    if (currentlyDrillDown) {
      this.props.ChatActions.pushUserDrillDownResponse(UserSelection);
      this.props.submitSurvey(currentSurveyID);
    } else {
      this.props.ChatActions.pushUserResponse(UserSelection);
      if (!thisSurveyIDHasDrillDown) {
        this.props.submitSurvey(currentSurveyID);
      }
    }
  }

  render() {
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const currentSurvey = this.props.ChatStore.survey[currentSurveyID]; 
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
    let choices = [];
    if (currentlyDrillDown) {
      choices = currentSurvey.drillDownResponse.choices;
    } else {
      choices = currentSurvey.response.choices;
    }

    return(
      <div className='UserResponseMultipleSelection'>
      {
        choices.map((choice, index) => {
          let className = 'unselected';
          const UserSelection = this.state.UserSelection;
          if (UserSelection[choice]) {
            className = 'selected';
          }
          if (choice === 'Other') {
            return (
              <input
                  key={index}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleInputKeyDown}
                  placeholder='Your Comment'
                  type='text'
                  value={this.state.EditText}
              />);
          } else {
            return (
              <div 
                  className={className} 
                  key={index}
                  onClick={this.handleClickSelection.bind(this, choice)}
              >
                {choice}
              </div>
            );
          }
        })
      }
      <input
          disabled={this.state.SubmitDisabled}
          onClick={this.handleClickSubmit}
          type='button'
          value='Send'
      />
      </div>
    );
  }
}