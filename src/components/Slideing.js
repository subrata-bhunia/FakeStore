import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const data = [
  {
    h1: 'Quis amet pariatur laborum eiusmod do enim eiusmod.',
    h2: '9/22/2035 - 10/12/2117',
    image:
      'https://thumbs.dreamstime.com/b/photo-turned-pointing-girl-showing-you-right-direction-being-isolated-blue-background-photo-turned-pointing-girl-157004018.jpg',
    color1: 'red',
    color2: '',
  },
  //   {
  //     h1: 'Eu qui consequat excepteur tempor officia.',
  //     h2: '7/31/2059 - 2/6/2023',
  //     image:
  //       'https://i2.wp.com/pixahive.com/wp-content/uploads/2020/08/Angry-woman-screaming-and-showing-her-hands-in-both-direction-23788-pixahive.jpg?fit=2560%2C1707&ssl=1',
  //     color1: 'blue',
  //     color2: '',
  //   },
];
const Slideing = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center'}}>
              <ImageBackground
                source={{uri: item?.image}}
                // resizeMode="contain"
                imageStyle={{
                  height: height,
                  width: width * 1,
                  borderRadius: 20,
                }}
                style={{
                  height: height * 0.3,
                  width: width * 0.8,
                  //   margin: 10,
                  //   marginLeft: 20,
                  //   alignSelf: 'center',
                }}>
                {/* <View
                  style={{
                    height: '120%',
                    backgroundColor: item?.color1,
                    width: '60%',
                    borderBottomEndRadius: 200,
                    borderTopRightRadius: 200,
                    borderRadius: 10,
                    //   alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{item?.h1}</Text>
                  <Text>{item?.h2}</Text>
                </View> */}
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Slideing;

const styles = StyleSheet.create({});
