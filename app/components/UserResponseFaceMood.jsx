import React from 'react';
export default class UserResponseFaceMood extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
    if (currentlyDrillDown) {
      this.props.ChatActions.pushUserDrillDownResponse(event);
      this.props.submitSurvey(currentSurveyID);
    } else {
      this.props.ChatActions.pushUserResponse(event);
      if (!thisSurveyIDHasDrillDown) {
        this.props.submitSurvey(currentSurveyID);
      }
    }
  }



  render() {
    return(
      <div className='UserResponseFaceMood'>
        <button onClick={this.handleClick.bind(this, '![sad](/assets/face-happy.svg)')}/>
        <button onClick={this.handleClick.bind(this, '![sad](/assets/face-meh.svg)')}/>
        <button onClick={this.handleClick.bind(this, '![sad](/assets/face-sad.svg)')}/>
      </div>
    );
  }
}
