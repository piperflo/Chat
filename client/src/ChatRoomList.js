import './ChatRoomList.css';

function ChatRoomList(props) {
    var rooms = props.rooms.map(name => {
        var selected = (name === props.currentRoom) ? "selected" : "";
        return (
          <button key={name} onClick={() => props.selectRoom(name)} className={selected}>
            {name}
          </button>
        );
    }); 
    return (
        <div className="ChatRoomList">
          <h3>Rooms</h3>
          {rooms}
        </div>
    );
}

export default ChatRoomList;