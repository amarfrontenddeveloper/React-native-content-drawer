
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer}>
          <View>
            <Image
              style={styles.flogo}
              source={require('../image/assets/img/home.png')}
            />
          </View>
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Welcome User
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            welcome@gmail.com
          </Text>
        </View>
        <View>
          <Drawer.Section style={{flex: 1, marginTop: 15}}>
            <DrawerItem
            icon={({color, size})=>(
                <Icon
                name='home'
                color={color}
                size={size}
                />
            )}
              style={styles.label}
              label="Home"
              labelStyle={{fontSize:20, fontWeight:'bold'}}
              onPress={() => {
                props.navigation.navigate('Home');
              }}></DrawerItem>

            <DrawerItem
            
            icon={({color, size})=>(
                <Icon
                name='account-details'
                color={color}
                size={size}
                />
            )}
              style={styles.label}
              labelStyle={{fontSize:20, fontWeight:'bold'}}
              label="About"
              onPress={() => {
                props.navigation.navigate('About');
              }}></DrawerItem>
            <DrawerItem
            icon={({color, size})=>(
                <Icon
                name='account-circle'
                color={color}
                size={size}
                />
            )}
              style={styles.label}
              label="Login"
              labelStyle={{fontSize:20, fontWeight:'bold'}}
              onPress={() => {
                props.navigation.navigate('Welcome User');
              }}></DrawerItem>
            <DrawerItem
            icon={({color, size})=>(
                <Icon
                name='login'
                color={color}
                size={size}
                />
            )}
              style={styles.label}
              label="Signup"
              labelStyle={{fontSize:20, fontWeight:'bold'}}
              onPress={() => {
                props.navigation.navigate('Create your account');
              }}></DrawerItem>
            <DrawerItem
            icon={({color, size})=>(
                <Icon
                name='file-sign'
                color={color}
                size={size}
                />
            )}
              style={styles.label}
              label="Flogin"
              labelStyle={{fontSize:20, fontWeight:'bold'}}
              onPress={() => {
                props.navigation.navigate('Please login here');
              }}></DrawerItem>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
export default CustomDrawerContent;

const styles = StyleSheet.create({
  label: {
    //borderWidth:1,
    backgroundColor: 'lightblue',
    borderRadius: 2,
    color: 'white',
    opacity: 5,
  },
  flogo: {
    alignSelf: 'center',
    width: 120,
    height: 100,
    marginTop: 30,
  },
});
