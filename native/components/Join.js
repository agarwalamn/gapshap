import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native'; 

function Join({navigation}){
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const letsJoin = () =>{
    navigation.navigate("Chat",{name,room});
  }
    return (
      <View style={styles.container}>
        <Text style={styles.joinMsg}>Join</Text>
        <TextInput 
        style={styles.inp}
        placeholder="Name"
        onChangeText={(val)=>setName(val)}/>
        <TextInput 
          style={styles.inp}
          placeholder="Room Id"
          onChangeText={(val)=>setRoom(val)}/>
        <Text
          style={styles.btn}
          onPress={letsJoin}
        >Join</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinMsg:{
    color:'#fff',
    fontSize:50,
    fontWeight:'bold',
    fontFamily:'Roboto,sans-serif',
    borderColor:'#fff'
  },
  inp:{
    backgroundColor:"#fff",
    width:"80%",
    padding:10,
    margin:15,
    borderRadius:10
  },
  test:{
    color:'#fff',
  },
  btn:{
    padding:10,
    color:"#fff",
    backgroundColor:"#2979ff",
    width:"80%",
    padding:10,
    margin:15,
    textAlign:'center',
    fontSize:20,
    borderRadius:10
    
  }
});

export default Join;
