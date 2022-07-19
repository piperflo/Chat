import ChatMessage from './ChatMessage';
import './ChatMessageList.css';

function ChatMessageList(props) {
    var messages = props.messages.map(msg => (
      <ChatMessage key={msg.name + msg.date} {...msg} />
    ));
    return (
        <div className="ChatMessageList">
          {messages}
        </div>
    );
  }
  
  export default ChatMessageList;