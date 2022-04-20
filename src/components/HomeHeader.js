import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const HomeHeader = () => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      }}>
      <View>
        <Image
          source={require('../assets/logo/fake-store-logo.png')}
          resizeMode="cover"
          style={{
            height: 60,
            width: 333,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
            justifyContent: 'flex-end',
            width: '100%',
            // backgroundColor: '#00d',
            alignItems: 'center',
            top: 20,
          }}>
          <Image
            source={require('../assets/icons/bell.png')}
            style={{
              resizeMode: 'contain',
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
          />
          <ImageBackground
            source={require('../assets/icons/cart.png')}
            style={{
              resizeMode: 'contain',
              height: 30,
              width: 30,
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: -5,
                top: -5,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>2</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
