import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';

const MainStack = () => {
  const Stack = createStackNavigator();
  const AuthReducer = useSelector(state => state.AuthReducer);
  console.log('AuthReducer', AuthReducer);
  const Screens = AuthReducer.token == null ? {name: Login} : {Home: Home};
  //   return (
  //     <Stack.Navigator
  //       initialRouteName={AuthReducer.token == null ? 'Login' : 'Home'}
  //       headerMode="none">
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Login" component={Login} />
  //     </Stack.Navigator>
  //   );
  if (AuthReducer.loading) {
    return (
      <View style={{flex: 1}}>
        <Loader visible={AuthReducer.loading} />
      </View>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          ...Screens,
        }).map(([name, component]) => {
          return <Stack.Screen name={name} component={component} />;
        })}
      </Stack.Navigator>
    );
  }
};

export default MainStack;

const styles = StyleSheet.create({});
