import './App.css';
import React, { useEffect } from 'react';
import ChatRoom from './ChatRoom';
import ChatRoomList from './ChatRoomList';

var data = {
  "General": [
    {
      "name": "John Snow",
      "date": "7/25/2021 11:22am",
      "content": "Winter is coming!"
    },
    {
      "name": "Jack Sprat",
      "date": "7/25/2021 11:27am",
      "content": "It's the middle of summer."
    }
  ],
  "School":[],
  "Life Hacks":[]
}
class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {roomData: {"General": []}, currentRoom: "General"};
    this.selectRoom = this.selectRoom.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.props.socket.on('update-state', this.handleStateUpdate);
    this.props.socket.on('message', this.handleMessage);
  }
  selectRoom(name) {
    this.setState({currentRoom: name});
  }
  sendMessage(message) {
    var name = this.state.name;
    var room = this.state.currentRoom;
    //var data = this.state.roomData;
    var date = new Date().toLocaleString();
    this.props.socket.emit('message', {
      room: room,
      name: name, 
      content: message, 
      date: date
    });
  }
  handleStateUpdate(serverState) {
    this.setState({roomData: serverState});
  }
  handleMessage(msg) {
    var roomData = this.state.roomData;
    roomData[msg.room].push({
      name: msg.name,
      date: msg.date,
      content: msg.content
    });
    this.setState({roomData: roomData});
  }
  componentDidMount(){
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
      console.log(data);
        var name = data.results[0].name.first + " " + data.results[0].name.last;
        var avatar = data.results[0].picture.thumbnail;
        this.setState({
          name: name,
          avatar: avatar
        });
    });
  }
  render() {
    if(!this.state.name) return (<h1>Loading...</h1>);
    return (
      <div className="Chatpage">
        <ChatRoomList currentRoom={this.state.currentRoom}
                      rooms={Object.keys(this.state.roomData)}
                      selectRoom={this.selectRoom} />
        <ChatRoom name={this.state.currentRoom} 
                  messages={this.state.roomData[this.state.currentRoom]}
                  sendMessage={this.sendMessage} />
      </div>
    );
  }
}
export default ChatPage;