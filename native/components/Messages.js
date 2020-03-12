import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import Input from './Input'


const Message = ({message, name}) =>{
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser 
     ? (
    <View style={styles.currUser}>
      <Text>{trimmedName}</Text>
      <View style={styles.currUserMsg}>
        <Text style={styles.currUserText}>{message.text}</Text>
      </View>
    </View>
    ):(
    <View style={styles.diffUser}>
      <Text>{message.user}</Text>
      <View style={styles.diffUserMsg}>
        <Text style={styles.diffUserText}>{message.text}</Text>
      </View>
    </View>
    )
    );
}

function Messages({messages,name}){
    return (
      <SafeAreaView style={styles.container}>
      {console.log(messages)}
      <FlatList
        data={messages}
        renderItem={({item})=><Message message={item} name={name}/>}
        keyExtractor={item=>item.i}
        intialScrollIndex={messages.length-1}
        />
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 80,
    backgroundColor: '#fff',
    flexDirection:"column",
    justifyContent: "space-between",
    },
    currUser:{
      alignItems:'flex-end',
      padding:10
    },
    currUserMsg:{
      backgroundColor:'#2979FF',
      padding:15,
      borderRadius:10,
    },
    currUserText:{
      fontSize:15,
      fontFamily:'Helvetica',
      color:"#fff"
    },
    diffUser:{
      alignItems:'flex-start',
      padding:10
    },
    diffUserMsg:{
      backgroundColor:'#f3f3f3',
      padding:15,
      borderRadius:10,
    },
    diffUserText:{
      fontSize:15,
      fontFamily:'Helvetica'
    }
});

export default Messages;
