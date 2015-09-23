import React from 'react';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import MessageBox from './MessageBox';
export default class Chatbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const surveyIsReady = this.props.ChatStore.surveyIsReady;
    const chatLogLength = this.props.ChatStore.chatLog.length;
    setTimeout(() => {
      if (surveyIsReady && chatLogLength === 0) {
        this.props.ChatActions.pushBotCall();
      }}, 0);
  }



  render() {
    const chatLog = this.props.ChatStore.chatLog;
    const botThinking = this.props.ChatStore.botThinking;
    if (this.props.ChatStore.errorMessage) {
      return <ErrorMessage/>;
    } else if (this.props.ChatStore.survey.length === 0) {
      return <LoadingMessage/>;
    } else {
      return(
        <div className='ChatBox'>{
          chatLog.map((chatLog) => {
            return(
              <MessageBox 
                  className='MessageContainer'
                  key={chatLog.id}
                  message={chatLog.message}
                  user={chatLog.user}
              />
            );
          })
        }
        {botThinking ? <div className='BotThinking'>...</div> : ''}
        </div>
      );
    }
  }
}
