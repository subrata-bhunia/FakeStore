import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon, Button} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import {getSignin} from '../../redux/actions';
import Loader from '../../components/Loader';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);
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
        Login
      </Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={txt => setusername(txt)}
        p={10}
        focusBorderColor="blue700"
        fontSize={17}
        // suffix=
        prefix={
          <Icon
            name="user"
            color="gray900"
            fontFamily="Feather"
            h={30}
            w={30}
          />
        }
        borderWidth={3}
        style={{
          width: '90%',
          marginVertical: 10,
        }}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={txt => setpassword(txt)}
        p={10}
        fontSize={17}
        borderWidth={3}
        focusBorderColor="blue700"
        suffix={
          <Pressable>
            <Icon
              name="eye"
              color="gray900"
              fontFamily="Feather"
              h={30}
              w={30}
            />
          </Pressable>
        }
        prefix={
          <Icon
            name="lock"
            color="gray900"
            fontFamily="Feather"
            h={30}
            w={30}
          />
        }
        style={{
          width: '90%',
          marginVertical: 10,
        }}
      />
      <Button
        onPress={() => dispatch(getSignin({username, password}))}
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
      <Loader visible={AuthReducer.loader} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
