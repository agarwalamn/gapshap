import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

function Input({message, setMessage, sendMessage}){
  const [name,setName] = useState('');
  const letsJoin = () =>{
    navigation.navigate("Chat",{name,room});
  }
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.inp}
        placeholder="Type a message..."
        onChangeText={(val)=>setMessage(val)}/>
        <Text
          style={styles.btn}
          onPress={(event)=>sendMessage(event)}
        >Send</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center"
  },
  inp:{
    backgroundColor:"#fff",
    width:"80%"  ,
    padding:"5%",
    fontSize:18,
    borderWidth:2,

  },
  btn:{
    padding:'5%',
    color:"#fff",
    backgroundColor:"#2979ff",
    textAlign:'center',
    fontSize:18,
    
  }
});

export default Input;
