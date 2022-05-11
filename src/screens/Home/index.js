import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slideing from '../../components/Slideing';
import {
  Button,
  Div,
  ScrollDiv,
  Skeleton,
  Text as Txt,
  Image as Img,
  Overlay,
  Icon,
} from 'react-native-magnus';
import {allCatagory, allProducts} from '../../apis/products';
import {randomImageUrl} from '../../helper/constants';
const demoCatagory = [1, 2, 3, 4, 5];
import {useSelector, useDispatch} from 'react-redux';
import {getAllItems} from '../../redux/actions';
import Loader from '../../components/Loader';

const Home = () => {
  const [all, setall] = React.useState([]);
  const [allProduct, setallProducts] = React.useState([]);
  const [overlayVisible, setoverlayVisible] = React.useState(false);
  const allData = useSelector(state => state.ListReducer);
  console.log('allData', allData);
  const dispatch = useDispatch();
  useEffect(() => {
    setall(allData.categoriesRes);
    setallProducts(allData.allItemsRes);
  }, [allData]);
  const randomIndex = Math.floor(Math.random() * allProduct.length);
  return (
    <ScrollDiv
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <HomeHeader />
      <Loader visible={allData.loader} />
      {/* Search */}
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
      {/* */}
      <Div row w={'90%'} alignSelf="center" m={20} alignItems="center">
        <Txt flex={1} fontWeight="500" fontSize={18}>
          Categories
        </Txt>
        <Pressable
          onPress={() => {
            setoverlayVisible(true);
          }}>
          <Txt flex={0} color="#3669C9" fontWeight="500">
            See All
          </Txt>
        </Pressable>
      </Div>
      {/* Skeleton-2 */}
      <FlatList
        style={{
          display: all.length == 0 ? 'flex' : 'none',
        }}
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
      <FlatList
        data={all}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Div alignItems="center">
              <Img
                h={70}
                w={70}
                rounded="xl"
                style={{marginHorizontal: 20, marginVertical: 10}}
                source={{
                  uri: randomImageUrl(item),
                }}
              />
              <Txt
                style={{
                  textTransform: 'capitalize',
                  fontSize: 15,
                  fontWeight: '600',
                }}
                numberOfLines={1}>
                {item}
              </Txt>
            </Div>
          );
        }}
      />
      <Overlay
        visible={overlayVisible}
        p={10}
        w={'95%'}
        onBackdropPress={() => {
          setoverlayVisible(false);
        }}>
        <Div
          alignItems="center"
          justifyContent="space-between"
          flexDir="row"
          p={10}>
          <Txt fontSize={20}>All Categories</Txt>
          <Pressable
            onPress={() => {
              setoverlayVisible(false);
            }}>
            <Txt fontSize={20}>X</Txt>
          </Pressable>
        </Div>
        <FlatList
          data={all}
          // horizontal
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Div alignItems="center">
                <Img
                  h={70}
                  w={70}
                  rounded="xl"
                  style={{marginHorizontal: 20, marginVertical: 10}}
                  source={{
                    uri: randomImageUrl(item),
                  }}
                />
                <Txt
                  style={{
                    textTransform: 'capitalize',
                    fontSize: 15,
                    fontWeight: '600',
                  }}
                  numberOfLines={1}>
                  {item}
                </Txt>
              </Div>
            );
          }}
        />
      </Overlay>
      {/* Products */}
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
          style={{
            display: allProduct.length == 0 ? 'flex' : 'none',
          }}
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
        <FlatList
          data={allProduct}
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
                <Img
                  h={125}
                  w={125}
                  rounded="xl"
                  source={{uri: item?.image}}
                  resizeMode="contain"
                />
                <Txt numberOfLines={2} fontSize={16} fontWeight="bold">
                  {item?.title}
                </Txt>
                <Txt
                  numberOfLines={1}
                  color="red"
                  style={{marginVertical: 10}}
                  fontWeight="bold"
                  fontSize={18}>
                  Rs. {parseInt(item?.price)}.00
                </Txt>
                <Div row alignItems="center">
                  <Icon
                    name="star"
                    color="yellow700"
                    fontSize="md"
                    fontFamily="FontAwesome"
                  />
                  <Txt>
                    {' '}
                    {item?.rating.rate} ({item?.rating?.count})
                  </Txt>
                </Div>
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
          style={{
            display: allProduct.length == 0 ? 'flex' : 'none',
          }}
          m={20}>
          <Skeleton.Box w={'70%'} h={30} bg="#EDEDED" />
          <Skeleton.Box w={'50%'} h={20} bg="#EDEDED" />
        </Div>
        <Div
          h={150}
          w={360}
          p={20}
          pt={40}
          pb={40}
          bg="#00FFFF"
          // shadowColor="#FAFAFA"
          alignSelf="center"
          justifyContent="space-around"
          rounded="md"
          // shadow=""
          // style={{elevation: 3}}
          style={{
            display: allProduct.length == 0 ? 'none' : 'flex',
          }}
          m={20}>
          <Div row alignItems="center">
            <Div w={'65%'}>
              <Txt fontSize={20} fontWeight={'bold'} p={5} numberOfLines={3}>
                {allProduct[randomIndex]?.title}
              </Txt>
              <Txt fontSize={17} fontWeight="500" p={5}>
                Shop now →
              </Txt>
            </Div>
            <Img
              source={{uri: allProduct[randomIndex]?.image}}
              h={125}
              w={125}
              rounded="xl"
              resizeMode="contain"
              bg="#00ffff"
            />
          </Div>
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
          style={{
            display: allProduct.length == 0 ? 'flex' : 'none',
          }}
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
        <FlatList
          data={allProduct}
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
                <Img
                  h={125}
                  w={125}
                  rounded="xl"
                  source={{uri: item?.image}}
                  resizeMode="contain"
                />
                <Txt numberOfLines={2} fontSize={16} fontWeight="bold">
                  {item?.title}
                </Txt>
                <Txt
                  numberOfLines={1}
                  color="red"
                  style={{marginVertical: 10}}
                  fontWeight="bold"
                  fontSize={18}>
                  Rs. {parseInt(item?.price)}.00
                </Txt>
                <Div row alignItems="center">
                  <Icon
                    name="star"
                    color="yellow700"
                    fontSize="md"
                    fontFamily="FontAwesome"
                  />
                  <Txt>
                    {' '}
                    {item?.rating.rate} ({item?.rating?.count})
                  </Txt>
                </Div>
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
          style={{
            display: allProduct.length == 0 ? 'flex' : 'none',
          }}
          m={20}>
          <Skeleton.Box w={'70%'} h={30} bg="#EDEDED" />
          <Skeleton.Box w={'50%'} h={20} bg="#EDEDED" />
        </Div>
        <Div
          h={150}
          w={360}
          p={20}
          pt={40}
          pb={40}
          bg="#FFFF00"
          // shadowColor="#FAFAFA"
          alignSelf="center"
          justifyContent="space-around"
          rounded="md"
          // shadow=""
          // style={{elevation: 3}}
          style={{
            display: allProduct.length == 0 ? 'none' : 'flex',
          }}
          m={20}>
          <Div row alignItems="center">
            <Div w={'65%'}>
              <Txt fontSize={20} fontWeight={'bold'} p={5} numberOfLines={3}>
                {
                  allProduct[
                    randomIndex == allProduct.length
                      ? randomIndex - 2
                      : randomIndex + 2
                  ]?.title
                }
              </Txt>
              <Txt fontSize={17} fontWeight="500" p={5}>
                Shop now →
              </Txt>
            </Div>
            <Img
              source={{
                uri: allProduct[
                  randomIndex == allProduct.length
                    ? randomIndex - 2
                    : randomIndex + 2
                ]?.image,
              }}
              h={125}
              w={125}
              rounded="xl"
              resizeMode="contain"
              bg="#FFFF00"
            />
          </Div>
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
        style={{
          display: allProduct.length == 0 ? 'flex' : 'none',
        }}
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
      {/*  */}
      <FlatList
        data={allProduct}
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
              <Img
                h={125}
                w={125}
                rounded="xl"
                source={{uri: item?.image}}
                resizeMode="contain"
              />
              <Txt numberOfLines={2} fontSize={16} fontWeight="bold">
                {item?.title}
              </Txt>
              <Txt
                numberOfLines={1}
                color="red"
                style={{marginVertical: 10}}
                fontWeight="bold"
                fontSize={18}>
                Rs. {parseInt(item?.price)}.00
              </Txt>
              <Div row alignItems="center">
                <Icon
                  name="star"
                  color="yellow700"
                  fontSize="md"
                  fontFamily="FontAwesome"
                />
                <Txt>
                  {' '}
                  {item?.rating.rate} ({item?.rating?.count})
                </Txt>
              </Div>
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
        style={{
          display: allProduct.length == 0 ? 'flex' : 'none',
        }}
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
      <FlatList
        data={allProduct}
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
              <Img
                h={125}
                w={125}
                rounded="xl"
                source={{uri: item?.image}}
                resizeMode="contain"
              />
              <Txt numberOfLines={2} fontSize={16} fontWeight="bold">
                {item?.title}
              </Txt>
              <Txt
                numberOfLines={1}
                color="red"
                style={{marginVertical: 10}}
                fontWeight="bold"
                fontSize={18}>
                Rs. {parseInt(item?.price)}.00
              </Txt>
              <Div row alignItems="center">
                <Icon
                  name="star"
                  color="yellow700"
                  fontSize="md"
                  fontFamily="FontAwesome"
                />
                <Txt>
                  {' '}
                  {item?.rating.rate} ({item?.rating?.count})
                </Txt>
              </Div>
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
              onPress={() => console.log('all_news')}
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
