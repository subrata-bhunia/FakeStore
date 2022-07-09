import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon, Button} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Loader from '../../components/Loader';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {BASE_URL} from '../../helper/constants';
import {useDispatch} from 'react-redux';
import {signupRequest} from '../../redux/reducers/AuthReducer';
const SignUp = ({route}) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log(route);
  const photoUpload = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: false,
      sortOrder: 'none',
      compressImageQuality: Platform.OS === 'android' ? 1 : 0.8,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      multiple: false,
    })
      .then(image => {
        let arr = image.path.split('/');
        let getOriginalname = arr[arr.length - 1];
        let imageObj = {
          name: getOriginalname,
          type: image.mime,
          uri:
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file://', ''),
        };
        let formData = new FormData();
        formData.append('file', imageObj);
        axios({
          method: 'POST',
          baseURL: BASE_URL,
          url: 'files/upload',
          data: formData,
        })
          .then(res => {
            setImage(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onPressSignUp = () => {
    let obj = {
      role: route?.params?.user_type,
      name: username,
      email: email,
      password: password,
      avatar: image?.location,
    };
    dispatch(signupRequest(obj));
  };
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
        Sign Up
      </Text>
      <Input
        placeholder="Name"
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
        placeholder="Email"
        value={email}
        onChangeText={txt => setemail(txt)}
        p={10}
        focusBorderColor="blue700"
        fontSize={17}
        // suffix=
        prefix={
          <Icon
            name="mail"
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
      {image != null ? (
        <Image
          source={{uri: image.location}}
          style={{
            height: 70,
            width: 70,
          }}
        />
      ) : null}
      <Button
        onPress={photoUpload}
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
        Uplaod Image
      </Button>

      <Button
        onPress={onPressSignUp}
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
        SignUp
      </Button>
      <Loader visible={false} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
