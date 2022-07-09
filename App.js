import {StyleSheet, StatusBar, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import MainStack from './src/navigations/MainStack';
import {getTokenRequest} from './src/redux/reducers/AuthReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getTokenRequest());
    }, 3000);
  }, []);
  LogBox.ignoreAllLogs();
  const AuthReducer = useSelector(state => state.AuthReducer);
  console.log('AuthR', AuthReducer);
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
