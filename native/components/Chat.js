import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Input from './Input'
import Messages from "./Messages"
import io from "socket.io-client";
let socket;


function Chat({navigation}){
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://gapshap-kira.herokuapp.com/';

  useEffect(() => {
    const { name, room } = {
      name:navigation.getParam('name'),
      room:navigation.getParam('room')
    };

    socket = io(ENDPOINT);

    setRoom(name);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  console.log(message, messages)

    return (
      <View style={styles.container}>
          <Messages 
            messages={messages} 
            name={name}
          />

          <Input 
            message={message} 
            setMessage={setMessage} 
            sendMessage={sendMessage}
          />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    justifyContent: "space-between",
    }
});

export default Chat;
