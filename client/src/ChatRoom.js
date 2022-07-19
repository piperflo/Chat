import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';
import './ChatRoom.css';

function ChatRoom(props) {
    return (
        <div className="ChatRoom">
          <h3>{props.name}</h3>
          <ChatMessageList messages={props.messages} />
          <ChatInput sendMessage={props.sendMessage} />
        </div>
    );
}

export default ChatRoom;