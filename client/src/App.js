
import './App.css';
import React from 'react';
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {roomData: data, currentRoom: "General"};
    this.selectRoom = this.selectRoom.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  selectRoom(name) {
    this.setState({currentRoom: name});
  }
  sendMessage(message) {
    var name = this.state.name;
    var room = this.state.currentRoom;
    var data = this.state.roomData;
    var date = new Date().toLocaleString();
    data[room].push({
      name: name, 
      content: message, 
      date: date
    });
    this.setState({roomData: data});
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
      <div className="App">
        <head>
        </head>
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
export default App;
