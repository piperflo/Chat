import React from 'react';
import './ChatInput.css';

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }
    handleChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        this.setState({[key]: value});
    }
    handleSend(event) {
        this.props.sendMessage(this.state.content);
        this.setState({content: ""});
    }
    render() {

        return (
          <div className="ChatInput">
            <input name="content" type="text" value={this.state.content} onChange={this.handleChange}/>
            <button onClick={this.handleSend}>Send</button>
          </div>
        );
    }
}

export default ChatInput;