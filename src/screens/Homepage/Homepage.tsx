import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  useColorScheme,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Homepage = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  //TEXTINPUT
  const [search, setSearch] = useState('');

  // movie list
  const [images, setimages] = useState([
    {src: require('../../../assets/list.png'), key: '1'},
    {src: require('../../../assets/list.png'), key: '2'},
  ]);

  // activity list
  const [currentPage, setCurrentPage] = useState(0);

  let orders = ['Healthy', 'Technology', 'Finance', 'Arts', 'Sport'];

  return (
    <View style={styles.parentView}>
      <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: '#818181',
            height: 40,
            justifyContent: 'center',
            borderRadius: 16,
            borderColor: '#f4f5fb',
            borderWidth: 2,
            width: '100%',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Dogecoin to the Moon..."
            value={search}
            onChangeText={setSearch}
            editable
            style={{padding: 10}}
          />
          <View style={{flex: 1}} />

          <Image
            style={{
              width: 18,
              marginRight: 16,
              height: 18,
            }}
            source={require('../../../assets/search.png')}
          />
        </View>
        <View style={{flex: 1}} />
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require('../../../assets/notify.png')}
        />
      </View>
      <View style={{height: 20}} />

      {/* second header */}

      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: '#000000',
            fontFamily: 'NewYork',
          }}>
          Latest News
        </Text>
        <View style={{flex: 1}} />
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#0080FF',
              fontWeight: 600,
              fontSize: 12,
              paddingRight: 12,
            }}>
            See All
          </Text>
          <Image
            style={{
              width: 14,
              height: 12,
            }}
            source={require('../../../assets/arrow_left.png')}
          />
        </View>
      </View>

      <View style={{height: 20}} />

      <View style={{height: 240}}>
        <FlatList
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={images}
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.key}
              // onPress={() => navigation.navigate("Order")}
            >
              <Image
                source={item.src}
                style={{
                  width: 300,
                  height: 240,
                  resizeMode: 'cover',
                  marginHorizontal: 8,
                  marginVertical: 12,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{height: 20}} />

      <View style={{height: 36, width: '100%'}}>
        <FlatList
          data={orders}
          horizontal={true} // Set horizontal scroll direction
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
          keyExtractor={(order, index) => index.toString()} // Use index as the key
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setCurrentPage(index);
              }}>
              <View
                style={{
                  borderRadius: 16,
                  height: 36,
                  borderWidth: 1,
                  borderColor: '#F0F1FA',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    index === currentPage ? '#FF656D' : '#FFFFFF',
                  marginRight: 16,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 12,
                    color: index === currentPage ? '#FFFFFF' : '#000000',
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView>
        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ff0000',
            width: '100%',
            height: 128,
          }}>
          <Text style={{fontSize: 14, fontWeight: 600, padding: 10}}>
            5 things to know about the 'conundrum' of {'\n'}lupus
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Matt Villano
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Sunday, 9 May 2021
            </Text>
          </View>
        </View>

        {/* thirdview */}
        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#00ff00',
            width: '100%',
            height: 128,
          }}>
          <Text style={{fontSize: 14, fontWeight: 600, padding: 10}}>
            5 things to know about the 'conundrum' of {'\n'}lupus
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Matt Villano
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Sunday, 9 May 2021
            </Text>
          </View>
        </View>

        {/* fourth view */}

        <View style={{height: 20}} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0000ff',
            width: '100%',
            height: 128,
          }}>
          <Text style={{fontSize: 14, fontWeight: 600, padding: 10}}>
            5 things to know about the 'conundrum' of {'\n'}lupus
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Matt Villano
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: 10,
                color: '#ffffff',
              }}>
              Sunday, 9 May 2021
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingTop: 40,
    paddingHorizontal: 20,

    flex: 1,
  },
});
