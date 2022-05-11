import {StyleSheet, StatusBar, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllCategories,
  getAllItems,
  getTokenAction,
} from './src/redux/actions';
import MainStack from './src/navigations/MainStack';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllItems());
    setTimeout(() => {
      dispatch(getTokenAction());
    }, 3000);
  }, []);
  LogBox.ignoreAllLogs();
  const listReducer = useSelector(state => state.ListReducer);
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
