import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon, Button} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Loader from '../../components/Loader';

const ChooseUser = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          padding: 20,
          fontSize: 20,
          color: 'blue',
          fontWeight: '700',
          letterSpacing: 1,
        }}>
        Choose User
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('SignUp', {user_type: 'admin'});
        }}
        // w={'90%'}
        h={50}
        alignSelf="center"
        m={20}
        px="xl"
        py="lg"
        bg="blue"
        borderWidth={1}
        borderColor="#0C1A30"
        color="#fff"
        underlayColor="red100">
        Sign up as Admin
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Home', {user_type: 'customer'});
        }}
        // w={'90%'}
        h={50}
        alignSelf="center"
        m={20}
        px="xl"
        py="lg"
        bg="blue"
        borderWidth={1}
        borderColor="#0C1A30"
        color="#fff"
        underlayColor="red100">
        Sign up as Customer
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        // w={'90%'}
        h={50}
        alignSelf="center"
        m={20}
        px="xl"
        py="lg"
        bg="blue"
        borderWidth={1}
        borderColor="#0C1A30"
        color="#fff"
        underlayColor="red100">
        Login
      </Button>
      <Loader visible={false} />
    </View>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({});
