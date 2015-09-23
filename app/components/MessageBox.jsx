import React from 'react';
import Avatar from 'app/components/Avatar';
import Marked from 'marked';

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.processMarkdown = this.processMarkdown.bind(this);
    this.processJSONMarkdown = this.processJSONMarkdown.bind(this);
  }

  processJSONMarkdown(markdown) {
    const processedJSON = [];
    for (const key in markdown) {
      if (markdown[key]) {
        const item = '- '+ key + '\n\r';
        processedJSON.push(item);
      }
    }
    if (processedJSON.length === 0) {
      return 'None of the above';
    }
    return processedJSON.join('');
  }

  processMarkdown(markdown) {
    let markdownText = markdown;
    if (typeof(markdown) === 'object') {
      markdownText = this.processJSONMarkdown(markdown);
    }
    Marked.setOptions({
      sanitize: true
    });
    const html = Marked(markdownText);
    return {__html: html};
  }

  render() {
    const avatarClasses = 'Avatar ' + this.props.user;
    const messageClasses = 'ChatMessage ' + this.props.user;
    return(
      <div>
        <Avatar
            className={avatarClasses}
            user={this.props.user}
        />
        <div
            className={messageClasses}
            dangerouslySetInnerHTML={this.processMarkdown(this.props.message)}
        />
      </div>
    );
  }
}
