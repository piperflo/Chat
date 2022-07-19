import './ChatMessage.css';

function ChatMessage(props) {
    return (
      <div className="ChatMessage">
        <div className="ChatMessage-identity">
          <strong>{props.name}</strong>
          <i>{props.date}</i>
        </div>
        <p className="ChatMessage-content">
          {props.content}
        </p>
      </div>
    );
  }
  
  export default ChatMessage;