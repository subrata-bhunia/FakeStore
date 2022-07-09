import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';

import Loader from '../components/Loader';
import ChooseUser from '../screens/ChooseUser';

const MainStack = () => {
  const Stack = createStackNavigator();
  const Screens =
    null == null
      ? {ChooseUser: ChooseUser, Login: Login, SignUp: SignUp}
      : {Home: Home};
  // if (false) {
  //   return (
  //     <View style={{flex: 1}}>
  //       <Loader visible={AuthReducer.loading} />
  //     </View>
  //   );
  // } else {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {Object.entries({
        ...Screens,
      }).map(([name, component]) => {
        return <Stack.Screen name={name} component={component} />;
      })}
    </Stack.Navigator>
  );
};
// };

export default MainStack;

const styles = StyleSheet.create({});
