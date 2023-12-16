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
import ShortCardList, { ShortCard1, ShortCard2, ShortCard3, ShortCard4 } from './components/shortCard';
import { Heading1, Heading2, MainText, TagText, TextLink } from './components/text';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator style={{paddingTop:0}}>
          <Stack.Screen name="home" component={Home} options={{headerShown:false}} />

          {/* <Stack.Screen name="search result" component={Screen1} /> */}
          {/* <Stack.Screen name="search" component={SearchScreen} options={{headerShown:false}}/> */}

          <Stack.Screen name='cardList' component={CardListScreen}></Stack.Screen>
          <Stack.Screen name='card' component={CardScreen}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function Home({navigation}){
  return (
    <ScrollView style={{width:'100%'}}>
      <View style={{...styles.container, paddingTop:40}}>

            <View style={{ width:"auto", gap:8, paddingVertical:10,
            flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
                <Pressable onPress={() => navigation.navigate('cardList')}>
                  <Search></Search>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('cardList')}>
                    <Image source={require('./assets/random.png')} style={{width:36, height:36}}/>
                </Pressable>
            </View>
            
            <Heading1>Для Вас</Heading1>
            <Pressable onPress={() => {navigation.navigate('card', {id:4})}}>
              <Card 
                pic={require('./assets/aboutface.png')}
                title={"Об интерфейсах: основы интерактивного дизайна"}
                text={"«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков"}
                tag1={"веб-дизайн"}
                tag2={"книга"}
              ></Card>
            </Pressable>
            
            <Heading1>Выбор редакции</Heading1>
            <Card
              pic={require('./assets/hydra.png')}
              title={"Hydra: Live Coding Visuals"}
              text={"Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере"}
              tag1={"код"}
              tag2={"синтезатор"}
            ></Card>

            <Heading1>Топ Запросы</Heading1>
            <Pressable onPress={() => {navigation.navigate('card', {id:1})}}>
              <ShortCard1></ShortCard1>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('card', {id:2})}}>
              <ShortCard2></ShortCard2>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('card', {id:3})}}>
              <ShortCard3></ShortCard3>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('card', {id:4})}}>
              <ShortCard4></ShortCard4>
            </Pressable>
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

// function SearchScreen({navigation}){
//   return (
//     <Stack.Navigator>

//       <Stack.Screen name='cardList' component={CardListScreen}></Stack.Screen>
//       <Stack.Screen name='card' component={CardScreen}></Stack.Screen>

//       <Stack.Screen name='search result' component={Screen2_1} options={{headerShown:true}}/>
//       <Stack.Screen name='card name' component={Screen2_2} />

//     </Stack.Navigator>
//   )
// }

function CardListScreen({navigation}){
  return (
    <View style={styles.container}>

      <View style={{ width:"auto", paddingHorizontal:16, paddingVertical:24,
          flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
            {/* <Pressable onPress={() => navigation.navigate('home')}>
                <Image source={require('./assets/arrowleft.png')} style={{width:30, height:30}}/>
            </Pressable> */}
            <Search></Search>
      </View>

      <Pressable onPress={() => {navigation.navigate('card', {id:1})}}>
        <ShortCard1></ShortCard1>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:2})}}>
        <ShortCard2></ShortCard2>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:3})}}>
        <ShortCard3></ShortCard3>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:4})}}>
        <ShortCard4></ShortCard4>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:5})}}>
        <Text>Card not found</Text>
      </Pressable>
      <StatusBar style="auto" />


    </View>
  )
}

const cards = [
  {
    id:1, 
    link:'https://www.awwwards.com/',
    pic:`require('./assets/awards.png')`,
    title: 'Awwwards',
    text:'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе',
    tag1:'веб-дизайн', 
    tag2:'сайт', 
    tag3:'', 
    tag4:'', 
    tag5:'' 
  },
  {
    id:2, 
    link:'https://cantunsee.space/',
    pic:`require('./assets/unsee.png')`,
    title: `Can't Unsee`, 
    text:'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
    tag1:'веб-дизайн', 
    tag2:'сайт', 
    tag3:'', 
    tag4:'', 
    tag5:'' 
  },
  {
    id:3, 
    link:'https://hydra.ojack.xyz/',
    pic:`require('./assets/hydra.png')`,
    title: 'Hydra: Live Coding Visuals',
    text:'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
    tag1:'веб-дизайн', 
    tag2:'сайт', 
    tag3:'', 
    tag4:'', 
    tag5:'' 
  },
  {
    id:4, 
    link:'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
    pic:`require('./assets/aboutface.png')`,
    title: 'Об интерфейсах: основы интерактивного дизайна',
    text:'«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков.',
    tag1:'веб-дизайн', 
    tag2:'сайт', 
    tag3:'', 
    tag4:'', 
    tag5:'' 
  },
]

function CardScreen({route}){
  const {id} = route.params
  const filteredCards = cards.filter( card => card.id === id ) 
  let title = '404'
  let text = 'Карточка не найдена'
  let tag1, tag2, pic
  if( filteredCards.length > 0 ){
    const card = filteredCards[0]
    title = card.title
    text = card.text
    tag1 = card.tag1
    tag2 = card.tag2
    pic = card.pic
  }
  return (
    <View style={{paddingHorizontal:10,  borderRadius: 6, overflow: 'hidden', 
    flexDirection: 'column', display: 'flex'}}>

        <View style={{width: '100%', height: 180, 
        backgroundColor:'', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Image 
            source={require()} resizeMode={"contain"}
            style={{width:"100%", height:"100%", borderRadius: 10, overflow: 'hidden'}}/>
        </View>

        <View style={{width: '100%', gap: 4,
        paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, 
        flexDirection: 'column', justifyContent: 'center', alignItems: 'start'}}>

            <View style={{width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', display: 'flex'}}>

                <Heading2>
                    {title}
                </Heading2>

                <View style={{flexDirection:'row', gap: 4, display: 'flex', alignItems: 'center'}}>
                    <TagText>{tag1}</TagText>
                    <View style={{paddingTop:3}}><View style={{ backgroundColor: '#555555', height: 3, width: 3, borderRadius: 100 }}></View></View>
                    <TagText>{tag2}</TagText>
                </View>

            </View>

            <View style={{height:1, marginVertical:4, width:60, backgroundColor: '#555555'}}></View>

            <MainText>
                {text}
            </MainText>  

        </View>

    </View>
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