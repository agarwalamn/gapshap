import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Join from "../components/Join"
import Chat from "../components/Chat"
import InfoBar from "../components/InfoBar";
import React from "react";


const screens = {
	Join: {
		screen: Join,
		navigationOptions:{
			headerShown:false
		}
	},
	Chat: {
		screen: Chat,
		navigationOptions:({navigation})=>{
			return {
				headerStyle:{
					backgroundColor: '#2979ff',
				},
				headerTintColor: '#fff',
				headerTitle:()=><InfoBar navigation={navigation}/>,
				
				
			}
		}
	}
}
const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);