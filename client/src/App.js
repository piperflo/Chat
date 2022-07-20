
import './App.css';
import React, { useEffect } from 'react';
import ChatRoom from './ChatRoom';
import ChatRoomList from './ChatRoomList';
import Chatpage from './Chatpage';



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
  render() {
    return (
      <div className="App">
        <Chatpage/>
      </div>
    );
  }
}
export default App;
