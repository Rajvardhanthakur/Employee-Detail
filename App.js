import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator }  from '@react-navigation/stack';


const Stack = createStackNavigator();


const myOption = {
          title:"Employees",
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:"#0394fc"
          }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component ={Home}
        options={myOption}
         />
        <Stack.Screen 
        name="Create"
        options={{...myOption, title:"Create Employee"}} 
        component={CreateEmployee} />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{...myOption, title:"Profile"}}/>
      </Stack.Navigator>
    </View>
  );
}


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop:Constants.statusBarHeight
  },
});
