import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slideing from '../../components/Slideing';
import {
  Button,
  Div,
  ScrollDiv,
  Skeleton,
  Text as Txt,
} from 'react-native-magnus';
const demoCatagory = [1, 2, 3, 4, 5];
const Home = () => {
  return (
    <ScrollDiv
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <HomeHeader />
      <Pressable
        onPress={() => {
          console.log('Goto Search Screen');
        }}
        style={{
          height: 60,
          width: '90%',
          backgroundColor: '#FAFAFA',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
          marginVertical: 10,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#C4C5C4',
          }}>
          Search Product Name
        </Text>
        <Image
          source={require('../../assets/icons/search.png')}
          resizeMode="contain"
        />
      </Pressable>
      {/* <Slideing /> */}
      {/* Skeleton-1 */}
      <Div
        h={150}
        w={360}
        p={20}
        pt={40}
        pb={40}
        bg="#FAFAFA"
        shadowColor="#FAFAFA"
        alignSelf="center"
        justifyContent="space-around"
        rounded="md"
        // shadow=""
        // style={{elevation: 3}}
      >
        <Skeleton.Box w={'70%'} h={30} bg="#EDEDED" />
        <Skeleton.Box w={'50%'} h={20} bg="#EDEDED" />
      </Div>
      {/* 
    
      */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Categories
        </Txt>
        <Pressable
          onPress={() => {
            console.log('see_all_cat');
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      {/* Skeleton-2 */}
      <FlatList
        data={demoCatagory}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Div alignItems="center">
              <Skeleton.Box
                h={70}
                w={70}
                rounded="xl"
                style={{marginHorizontal: 20, marginVertical: 10}}
              />
              <Skeleton.Box h={20} w={80} />
            </Div>
          );
        }}
      />
      {/*  */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Featured Product
        </Txt>
        <Pressable
          onPress={() => {
            console.log('see_all_fp');
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      {/* Skeleton-3 */}
      <Div>
        <FlatList
          data={demoCatagory}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Div
                // alignItems="center"
                h={242}
                w={150}
                bg="#FAFAFA"
                m={10}
                p={10}
                rounded="md">
                <Skeleton.Box h={125} w={125} rounded="xl" />
                <Skeleton.Box h={25} w={100} mt={10} />
                <Skeleton.Box h={25} w={100} mt={10} />
              </Div>
            );
          }}
        />
        {/* Skeleton-4 */}
        <Div
          h={150}
          w={360}
          p={20}
          pt={40}
          pb={40}
          bg="#FAFAFA"
          // shadowColor="#FAFAFA"
          alignSelf="center"
          justifyContent="space-around"
          rounded="md"
          // shadow=""
          // style={{elevation: 3}}
          m={20}>
          <Skeleton.Box w={'70%'} h={30} bg="#EDEDED" />
          <Skeleton.Box w={'50%'} h={20} bg="#EDEDED" />
        </Div>
      </Div>
      {/*  */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Best Sellers
        </Txt>
        <Pressable
          onPress={() => {
            console.log('see_all_bs');
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      {/* Skeleton-4 */}
      <Div>
        <FlatList
          data={demoCatagory}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Div
                // alignItems="center"
                h={242}
                w={150}
                bg="#FAFAFA"
                m={10}
                p={10}
                rounded="md">
                <Skeleton.Box h={125} w={125} rounded="xl" />
                <Skeleton.Box h={25} w={100} mt={10} />
                <Skeleton.Box h={25} w={100} mt={10} />
              </Div>
            );
          }}
        />
        <Div
          h={150}
          w={360}
          p={20}
          pt={40}
          pb={40}
          bg="#FAFAFA"
          // shadowColor="#FAFAFA"
          alignSelf="center"
          justifyContent="space-around"
          rounded="md"
          // shadow=""
          // style={{elevation: 3}}
          m={20}>
          <Skeleton.Box w={'70%'} h={30} bg="#EDEDED" />
          <Skeleton.Box w={'50%'} h={20} bg="#EDEDED" />
        </Div>
      </Div>
      {/* Top Rated Product */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Top Rated Product
        </Txt>
        <Pressable
          onPress={() => {
            console.log('see_all_trp');
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      <FlatList
        data={demoCatagory}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Div
              // alignItems="center"
              h={242}
              w={150}
              bg="#FAFAFA"
              m={10}
              p={10}
              rounded="md">
              <Skeleton.Box h={125} w={125} rounded="xl" />
              <Skeleton.Box h={25} w={100} mt={10} />
              <Skeleton.Box h={25} w={100} mt={10} />
            </Div>
          );
        }}
      />
      {/* Special Offers */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Special Offers
        </Txt>
        <Pressable
          onPress={() => {
            console.log('see_all_sp');
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      <FlatList
        data={demoCatagory}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Div
              // alignItems="center"
              h={242}
              w={150}
              bg="#FAFAFA"
              m={10}
              p={10}
              rounded="md">
              <Skeleton.Box h={125} w={125} rounded="xl" />
              <Skeleton.Box h={25} w={100} mt={10} />
              <Skeleton.Box h={25} w={100} mt={10} />
            </Div>
          );
        }}
      />
      {/* Latest News */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Latest News
        </Txt>
      </Div>
      <FlatList
        data={demoCatagory}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Div
              alignItems="center"
              row
              h={150}
              w={'95%'}
              bg="#FAFAFA"
              m={10}
              p={10}
              rounded="md">
              <Div flex={1}>
                <Skeleton.Box h={30} w={250} mt={10} />
                <Skeleton.Box h={25} w={220} mt={10} />
                <Skeleton.Box h={20} w={200} mt={10} />
              </Div>
              <Skeleton.Box h={70} w={70} rounded="xl" />
            </Div>
          );
        }}
        ListFooterComponent={() => {
          return (
            <Button
              w={'90%'}
              h={50}
              alignSelf="center"
              m={20}
              px="xl"
              py="lg"
              bg="white"
              borderWidth={1}
              borderColor="#0C1A30"
              color="#0C1A30"
              underlayColor="red100">
              See All News
            </Button>
          );
        }}
      />
    </ScrollDiv>
  );
};

export default Home;

const styles = StyleSheet.create({});
