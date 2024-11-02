import { SafeAreaView,TouchableOpacity,ScrollView,TextInput,Image,Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false} 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.box}>
        <View style={{
            width:'100%',
            height:100,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
          <Image style={{
            width: 30,
            height: 30,
            color:'black',
          }} source={require('../all_images/Home - Audio Listing/Image 36.png')}/>
          <View style={{
            height:'100%',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <FontAwesome name="bell" style={{
              marginHorizontal:20,}} size={20}/>
            <Image source={require('../all_images/Feed - Comment on an Audio/Avatar 8.png')}/>
          </View>
        </View> 
      </View>
      <View style={styles.box}>
        <View style={{
          width:'100%',
        }}>
          <Text style={{color:'gray'}}> Good morning,</Text>
          <Text style={{fontSize:25,fontWeight:'bold'}}> Ashley Scott</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={{width:'100%',marginVertical:10}}>
          <TextInput style={{
            position:'relative',
            padding:10,
            paddingLeft:40,
            borderWidth:1,
            borderColor:'gray',
            borderRadius:50,
          }} placeholder='What you want to listen to'/>
          <FontAwesome name="search" style={{
            marginHorizontal:20,
            position:'absolute',
            top:10,
            left:-5,
          }} size={20}/>
        </View>
      </View>
      <View style={styles.box}>
        <View style={{
          width:'100%',
          marginTop:23,
        }}>
          <Text style={{fontSize:17,fontWeight:'bold'}}>Suggestions for you </Text>
          <ScrollView style={styles.products}
            horizontal={true}
            showsVerticalScrollIndicator={true} 
            showsHorizontalScrollIndicator={true} >
            <View style={styles.product}>
              <Image style={{
                width: 200,
                height: 250,
              }} source={require('../all_images/Home - Audio Listing/Container 26.png')}
                />
            </View>
            <View style={styles.product}>
               <Image style={{
                width: 200,
                height: 250,
                 }} source={require('../all_images/Home - Audio Listing/Container 27.png')}
            />
            </View>
            <View style={styles.product}>
               <Image style={{
                width: 200,
                height: 250,
              }} source={require('../all_images/Home - Audio Listing/Container 27.png')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.box}>
        <View style={{
          width:'100%',
          marginTop:23,
        }}>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}>
            <Text style={{fontSize:17,fontWeight:'bold'}}>Charts</Text>
            <Text style={{fontSize:12,color:'grey'}}>See all</Text>
          </View>
          <ScrollView style={styles.products}
            horizontal={true}
            showsVerticalScrollIndicator={true} 
            showsHorizontalScrollIndicator={true} >
            <View style={styles.product2}>
              <Image source={require('../all_images/Home - Audio Listing/Container 31.png')}/>
              <Text style={styles.textImg}> 
                Daily chart-toppers update
              </Text>
            </View>
            <View style={styles.product2}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Container 32.png')}/>
              <Text style={styles.textImg}> 
                Daily chart-toppers update
              </Text>
            </View>
            <View style={styles.product2}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Container 32.png')}/>
              <Text style={styles.textImg}> 
                Daily chart-toppers update
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.box}>
        <View style={{
          width:'100%',
          marginTop:23,
        }}>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}>
            <Text style={{fontSize:17,fontWeight:'bold'}}>Trending albums</Text>
            <Text style={{fontSize:12,color:'grey'}}>See all</Text>
          </View>
          <ScrollView style={styles.products}
            horizontal={true}
            showsVerticalScrollIndicator={true} 
            showsHorizontalScrollIndicator={true} >
            <View style={styles.product2}>
              <Image style={{

              }} source={require('../all_images/Home - Audio Listing/Image 45.png')}/>
              <Text style={{fontSize:15,fontWeight:'bold'}}> 
                Magna nost
              </Text>
              <Text style={{fontSize:14,color:'grey'}}> 
                Brian Thomas
              </Text>
            </View>
            <View style={styles.product2}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Image 46.png')}/>
              <Text style={{fontSize:15,fontWeight:'bold'}}> 
                ME
              </Text>
              <Text style={{fontSize:14,color:'grey'}}> 
                Jessica Gonzalez
              </Text>
            </View>
            <View style={styles.product2}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Image 47.png')}/>
              <Text style={{fontSize:15,fontWeight:'bold'}}> 
                ME
              </Text>
              <Text style={{fontSize:14,color:'grey'}}> 
                Jessica Gonzalez
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
       <View style={styles.box}>
        <View style={{
          width:'100%',
          marginTop:23,
        }}>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}>
            <Text style={{fontSize:17,fontWeight:'bold'}}>Popular artists</Text>
            <Text style={{fontSize:12,color:'grey'}}>See all</Text>
          </View>
          <ScrollView style={styles.products}
            horizontal={true}
            showsVerticalScrollIndicator={true} 
            showsHorizontalScrollIndicator={true} >
            <TouchableOpacity 
              style={styles.product3} 
              onPress={() => navigation.navigate('ProfileScreen')} 
            >
              <Image 
                source={require('../all_images/Home - Audio Listing/Image 39.png')}
              />
              <Text style={{
                fontSize: 15,
                color: 'grey',
                marginVertical: 10,
              }}>
                Jennifer Wilson
              </Text>
              <Text style={{
                color: 'white',
                backgroundColor: 'black',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 50,
              }}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.product3} 
            onPress={() => navigation.navigate('ProfileScreen')}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Image 40.png')}/>
               <Text style={{
                fontSize:15,
                color:'grey',
                marginVertical:10,}}> 
                Jennifer Wilson
              </Text>
             <TouchableOpacity>
              <Text style={{
                color:'white',
                backgroundColor:'black',
                paddingHorizontal:10,
                paddingVertical:5,
                borderRadius:50,
              }}>
                Follow
              </Text>
             </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.product3} 
            onPress={() => navigation.navigate('ProfileScreen')}>
               <Image style={{
              }} source={require('../all_images/Home - Audio Listing/Image 41.png')}/>
              <Text style={{
                fontSize:15,
                color:'grey',
                marginVertical:10,}}> 
                Jennifer Wilson
              </Text>
             <TouchableOpacity>
              <Text style={{
                color:'white',
                backgroundColor:'black',
                paddingHorizontal:10,
                paddingVertical:5,
                borderRadius:50,
              }}>
                Follow
              </Text>
             </TouchableOpacity>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
      <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          padding: 20,
          borderTopWidth:1,
          borderColor:'grey',
          height:75 }}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <FontAwesome name="home" size={20} style={{color:'grey',}} />
          <Text style={{
            fontSize:13,
            fontWeight:500,
            color:'grey',
          }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <FontAwesome name="search" size={20} style={{color:'grey',}}/>
          <Text style={{
            fontSize:13,
            fontWeight:500,
            color:'grey',
          }}>
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <FontAwesome name="newspaper-o" size={20} style={{color:'grey',}}/> 
          <Text style={{
            fontSize:13,
            fontWeight:500,
            color:'grey',
          }}>
            Feed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
          <FontAwesome name="book" size={20} style={{color:'grey',}}/>
          <Text style={{
            fontSize:13,
            fontWeight:500,
            color:'grey',
          }}>
            Library
          </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  products:{
    flexDirection:'row',
  },
  product:{
    marginTop:8,
    marginRight:20
  },
  product2:{
    marginTop:8,
    width: 160,
  },
  product3:{
    marginTop:8,
    width: 160,
    justifyContent:'center',
    alignItems:'center'
  },
  textImg:{
    color:'grey',
  }

});