// import {StyleSheet} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from './src/pages/login/Home';
// import About from './src/pages/login/About';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Login from './src/pages/login/Login';
// import Signup from './src/pages/login/Signup';
// import Flogin from './src/pages/login/Flogin';

// const Tab = createBottomTabNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'About') {
//               iconName = focused
//                 ? 'account-details'
//                 : 'account-details-outline';
//             } else if (route.name === 'Welcome User') {
//               iconName = focused ? 'account-circle' : 'account-circle-outline';
//             } else if (route.name === 'Please login here') {
//               iconName = focused ? 'login' : 'login';
//             } else if (route.name === 'Create your account') {
//               iconName = focused ? 'file-sign' : 'file-sign';
//             }

//             return <Icons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'black',
//         })}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="About" component={About} />
//         <Tab.Screen name="Welcome User" component={Login} />
//         <Tab.Screen name="Please login here" component={Flogin} />
//         <Tab.Screen name="Create your account" component={Signup} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// break;

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/login/Home';
import About from './src/pages/login/About';
import Login from './src/pages/login/Login';
import Flogin from './src/pages/login/Flogin';
import Signup from './src/pages/login/Signup';
import {View, Image} from 'react-native';
import CustomDrawerContent from './src/pages/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
      <NavigationContainer style={{backgroundColor:'red'}} >
        <Drawer.Navigator drawerContent={(props)=> <CustomDrawerContent {...props}/>} initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Welcome User" component={Login} />
          <Drawer.Screen name="Please login here" component={Flogin} />
          <Drawer.Screen name="Create your account" component={Signup} />
        </Drawer.Navigator>
      
      </NavigationContainer>
    
  );
}




