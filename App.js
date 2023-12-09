import 'react-native-gesture-handler';

import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import FlatListFunction from './components/listings';
import { ScrollView } from 'react-native-gesture-handler';
import Card from './components/card';
import Search from './components/search';
import Tag from './components/tag';
import CardButton from './components/cardAction';
import ShortCardList from './components/shortCard';
import { Heading1, TagText, TextLink } from './components/text';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator style={{paddingTop:40}}>
        <Drawer.Screen name="home" component={Home} options={{headerShown:true}} />
        {/* <Drawer.Screen name="search result" component={Screen1} /> */}
        <Drawer.Screen name="search" component={Screen2} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}){
  return (
    <ScrollView style={{width:'100%'}}>
      <View style={styles.container}>
          

            {/* <Button title='Экран 1' onPress={() => navigation.navigate('screen1')} /> */}

            <View style={{ width:"auto", gap:8, paddingVertical:10,
            flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
                <Pressable onPress={() => navigation.navigate('search')}>
                  <Search></Search>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('search')}>
                    <Image source={require('./assets/random.png')} style={{width:36, height:36}}/>
                </Pressable>
            </View>
            

            <Heading1>Для Вас</Heading1>
            <Card 
              pic={require('./assets/aboutface.png')}
              title={"Об интерфейсах: основы интерактивного дизайна"}
              text={"«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков"}
              tag1={"веб-дизайн"}
              tag2={"книга"}
            ></Card>
            
            
            <Heading1>Выбор редакции</Heading1>
            <Card
              pic={require('./assets/hydra.png')}
              title={"Hydra: Live Coding Visuals"}
              text={"Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере"}
              tag1={"код"}
              tag2={"синтезатор"}
            ></Card>

            <Heading1>Топ Запросы</Heading1>
            <ShortCardList></ShortCardList>
            <View style={{paddingBottom:10}}><TextLink>смотреть все</TextLink></View>

            <Heading1>Случайная ссылка</Heading1>
            <Card
              pic={require('./assets/awards.png')}
              title={"Awwwards"}
              text={"Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе"}
              tag1={"веб-дизайн"}
              tag2={"сайт"}
            ></Card>

          
      </View>
    </ScrollView>
  )
}

// function Screen1({navigation}){
//   return (
//     <View style={styles.container}>
//         <Text>Экран 1</Text>
//         <Pressable onPress={() => navigation.navigate('screen2')}>
//           <View style={{width:200, height:50, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:10}}>
//             <Text style={{color:'white', fontSize:24}}>Переход</Text>
//           </View>
//         </Pressable>
//     </View>
//   )
// }

function Screen2({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name='search result' component={Screen2_1} options={{headerShown:true}}/>
      <Stack.Screen name='card name' component={Screen2_2} />
    </Stack.Navigator>
  )
}

function Screen2_1({navigation}){
  return (
    <ScrollView>
      <View style={{...styles.container, display: "flex", gap:32}}>
          
          {/* у меня нет safe area view, поэтому пустой контейнер, когда нет хедера */}
          <View style={{height:0}}/>

          {/* <Button title='Экран 2_2' onPress={() => navigation.navigate('card name')} /> */}

          <View style={{ width:"auto", gap:8, paddingHorizontal:16,
          flexDirection:"row", alignItems:'center', justifyContent:'start'}}>
            <Pressable onPress={() => navigation.navigate('home')}>
                <Image source={require('./assets/arrowleft.png')} style={{width:30, height:30}}/>
            </Pressable>
            <Search></Search>
          </View>

          <Pressable onPress={() => navigation.navigate('card name')} style={{}}>

            <TagText>последние запросы</TagText>
            <ShortCardList></ShortCardList>

          </Pressable>

      </View>
    </ScrollView>

  )
}

function Screen2_2(){
  return (
    <ScrollView>
      <View style={{...styles.container, display: "flex", gap:32}}>

          {/* у меня нет safe area view, поэтому пустой контейнер, когда нет хедера */}
          <View style={{height:0}}/>

          <Card 
            pic={require('./assets/awards.png')}
            title={"Awwwards"}
            text={"Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе"}
            tag1={"веб-дизайн"}
            tag2={"сайт"}
          ></Card>

          <View style={{ paddingHorizontal:10, flexDirection: 'row', gap:12, width: '100%', alignItems: 'center', justifyContent: 'start',}}>
            <CardButton name='browser'></CardButton>
            <CardButton name='link'></CardButton>
            <CardButton name='share'></CardButton>
            <CardButton name='favourite'></CardButton>
          </View>

          {/* <Heading1>Смежные темы</Heading1>
          <View style={{ flexDirection: 'row', gap:12, height:40, width: '100%', alignItems: 'center', justifyContent: 'start',}}>
            <Tag name='web'></Tag>
            <Tag name='code'></Tag>
            <Tag name='synth'></Tag>
          </View> */}

          <Heading1>Похожие статьи</Heading1>
          <ShortCardList></ShortCardList>
          
        
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:2000,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
  },

});