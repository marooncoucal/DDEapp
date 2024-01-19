import 'react-native-gesture-handler';

import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import FlatListFunction from './components/listings';
import { ScrollView } from 'react-native-gesture-handler';
import Card from './components/card';
import Search from './components/search';
import Tag from './components/tag';
import CardButton from './components/cardAction';
import ShortCardList, { ShortCard, ShortCard1, ShortCard2, ShortCard3, ShortCard4 } from './components/shortCard';
import { Heading1, Heading2, MainText, SCardText, TagText, TextLink } from './components/text';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CardLinks from './components/cardAction';

const picAboutface = require('./assets/aboutface.png')
const picHydra = require('./assets/hydra.png')
const picUnsee = require('./assets/unsee.png')
const picAwards = require('./assets/awards.png')

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator style={{ paddingTop: 0 }}>


          <Stack.Screen name="Digital Design Encyclopedia" component={Home} options={{ headerShown: true }} />
          <Stack.Screen name='cardList' component={CardListScreen}></Stack.Screen>
          <Stack.Screen name='card' component={CardScreen}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function Home({ navigation }) {
  return (
    <ScrollView style={{ width: '100%' }}>
      <View style={{ ...styles.container }}>

        <Pressable onPress={() => navigation.navigate('cardList')}>
          <Search></Search>
        </Pressable>

        <View>
          <Heading1>РЕКОМЕНДАЦИИ</Heading1>
          <Pressable onPress={() => { navigation.navigate('card', { id: 4 }) }}>
            <Card
              pic={require('./assets/aboutface.png')}
              title={"Об интерфейсах: основы интерактивного дизайна"}
              text={"«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков"}
              tag1={"веб-дизайн"}
              tag2={"книга"}
            ></Card>
          </Pressable>
        </View>


        <View>
          <Heading1>ВЫБОР РЕДАКЦИИ</Heading1>
          <Pressable onPress={() => { navigation.navigate('card', { id: 3 }) }}>
            <Card
              pic={require('./assets/hydra.png')}
              title={"Hydra: Live Coding Visuals"}
              text={"Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере"}
              tag1={"код"}
              tag2={"синтезатор"}
            ></Card>
          </Pressable>
        </View>




        <View>

          <Heading1>ТОП ЗАПРОСЫ</Heading1>

          <Pressable onPress={() => { navigation.navigate('card', { id: 1 }) }}>
            <ShortCard
              pic={require('./assets/awards.png')}
              title={"Awwwards"}
              tag1={"веб-дизайн"}
              tag2={"сайт"}
            ></ShortCard>
          </Pressable>
          <Pressable onPress={() => { navigation.navigate('card', { id: 2 }) }}>
            <ShortCard
              pic={require('./assets/unsee.png')}
              title={"Can't Unsee"}
              tag1={"игра"}
              tag2={"сайт"}
            ></ShortCard>
          </Pressable>
          <Pressable onPress={() => { navigation.navigate('card', { id: 3 }) }}>
            <ShortCard
              pic={require('./assets/hydra.png')}
              title={"Hydra: Live Coding Visual"}
              tag1={"код"}
              tag2={"синтезатор"}
            ></ShortCard>
          </Pressable>
          <Pressable onPress={() => { navigation.navigate('card', { id: 4 }) }}>
            <ShortCard
              pic={require('./assets/aboutface.png')}
              title={"Об интерфейсах: основы интерактивного дизайна"}
              tag1={"веб-дизайн"}
              tag2={"книга"}
            ></ShortCard>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('cardList')}>
            <View style={{ paddingBottom: 10 }}><TextLink>смотреть все</TextLink></View>
          </Pressable>

        </View>



        <View>
          <Heading1>СЛУЧАЙНАЯ ССЫЛКА</Heading1>
          <Pressable onPress={() => { navigation.navigate('card', { id: 1 }) }}>
            <Card
              pic={require('./assets/awards.png')}
              title={"Awwwards"}
              text={"Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе"}
              tag1={"веб-дизайн"}
              tag2={"сайт"}
            ></Card>
          </Pressable>
        </View>



      </View>
    </ScrollView>
  )
}

function CardListScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Search></Search>

      <View>

        <Pressable onPress={() => { navigation.navigate('card', { id: 1 }) }}>
          <ShortCard
            pic={require('./assets/awards.png')}
            title={"Awwwards"}
            tag1={"веб-дизайн"}
            tag2={"сайт"}
          ></ShortCard>
        </Pressable>

        <Pressable onPress={() => { navigation.navigate('card', { id: 2 }) }}>
          <ShortCard
            pic={require('./assets/unsee.png')}
            title={"Can't Unsee"}
            tag1={"игра"}
            tag2={"сайт"}
          ></ShortCard>
        </Pressable>

        <Pressable onPress={() => { navigation.navigate('card', { id: 3 }) }}>
          <ShortCard
            pic={require('./assets/hydra.png')}
            title={"Hydra: Live Coding Visual"}
            tag1={"код"}
            tag2={"синтезатор"}
          ></ShortCard>
        </Pressable>

        <Pressable onPress={() => { navigation.navigate('card', { id: 4 }) }}>
          <ShortCard
            pic={require('./assets/aboutface.png')}
            title={"Об интерфейсах: основы интерактивного дизайна"}
            tag1={"веб-дизайн"}
            tag2={"книга"}
          ></ShortCard>
        </Pressable>

        {/* <Pressable onPress={() => { navigation.navigate('card', { id: 5 }) }}>
          <SCardText>Card not found</SCardText>
        </Pressable> */}

      </View>

    </View>
  )
}

const cards = [
  {
    id: 1,
    link: 'https://www.awwwards.com/',
    pic: picAwards,
    title: 'Awwwards',
    text: 'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе',
    tag1: 'веб-дизайн',
    tag2: 'сайт',
    tag3: '',
    tag4: '',
    tag5: ''
  },
  {
    id: 2,
    link: 'https://cantunsee.space/',
    pic: picUnsee,
    title: `Can't Unsee`,
    text: 'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
    tag1: 'игра',
    tag2: 'тренажёр',
    tag3: '',
    tag4: '',
    tag5: ''
  },
  {
    id: 3,
    link: 'https://hydra.ojack.xyz/',
    pic: picHydra,
    title: 'Hydra: Live Coding Visuals',
    text: 'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
    tag1: 'код',
    tag2: 'синтезатор',
    tag3: '',
    tag4: '',
    tag5: ''
  },
  {
    id: 4,
    link: 'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
    pic: picAboutface,
    title: 'Об интерфейсах: основы интерактивного дизайна',
    text: '«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков.',
    tag1: 'книга',
    tag2: 'сайт',
    tag3: '',
    tag4: '',
    tag5: ''
  },
]

function CardScreen({ route, navigation }) {
  const { id } = route.params
  const filteredCards = cards.filter(card => card.id === id)
  let title = '404'
  let text = 'Карточка не найдена'
  let tag1, tag2, pic
  if (filteredCards.length > 0) {
    const card = filteredCards[0]
    title = card.title
    text = card.text
    tag1 = card.tag1
    tag2 = card.tag2
    pic = card.pic
  }
  return (

    <View style={{
      borderRadius: 6, overflow: 'hidden', height: 3000,
      flexDirection: 'column', display: 'flex', backgroundColor: '#E5DFDA', flex: 1
    }}>
      <ScrollView>

        <View style={{ paddingHorizontal: 10, paddingVertical: 14, }}>

          <View style={{
            width: '100%', height: 180,
            backgroundColor: '', justifyContent: 'center', alignItems: 'center', display: 'flex'
          }}>
            <Image
              source={pic} resizeMode={"contain"}
              style={{ width: "100%", height: "100%", borderRadius: 10, overflow: 'hidden' }} />
          </View>

          <View style={{
            width: '100%', gap: 4,
            paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18,
            flexDirection: 'column', justifyContent: 'center', alignItems: 'start'
          }}>

            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', display: 'flex' }}>

              <Heading2>
                {title}
              </Heading2>

              <View style={{ flexDirection: 'row', gap: 4, display: 'flex', alignItems: 'center' }}>
                <TagText>{tag1}</TagText>
                <View style={{ paddingTop: 3 }}><View style={{ backgroundColor: '#555555', height: 3, width: 3, borderRadius: 100 }}></View></View>
                <TagText>{tag2}</TagText>
              </View>

            </View>

            <View style={{ height: 1, marginVertical: 4, width: 60, backgroundColor: '#555555' }}></View>

            <MainText>
              {text}
            </MainText>

          </View>

        </View>

        <CardLinks></CardLinks>

        <View>
          <Heading1>ПОХОЖИЕ</Heading1>
          <Pressable onPress={() => { navigation.navigate('card', { id: 1 }) }}>
            <ShortCard
              pic={require('./assets/awards.png')}
              title={"Awwwards"}
              tag1={"веб-дизайн"}
              tag2={"сайт"}
            ></ShortCard>
          </Pressable>

          <Pressable onPress={() => { navigation.navigate('card', { id: 2 }) }}>
            <ShortCard
              pic={require('./assets/unsee.png')}
              title={"Can't Unsee"}
              tag1={"игра"}
              tag2={"сайт"}
            ></ShortCard>
          </Pressable>

          <Pressable onPress={() => { navigation.navigate('card', { id: 3 }) }}>
            <ShortCard
              pic={require('./assets/hydra.png')}
              title={"Hydra: Live Coding Visual"}
              tag1={"код"}
              tag2={"синтезатор"}
            ></ShortCard>
          </Pressable>

          <Pressable onPress={() => { navigation.navigate('card', { id: 4 }) }}>
            <ShortCard
              pic={require('./assets/aboutface.png')}
              title={"Об интерфейсах: основы интерактивного дизайна"}
              tag1={"веб-дизайн"}
              tag2={"книга"}
            ></ShortCard>
          </Pressable>
        </View>

      </ScrollView >

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    gap: 20,
    height: 1960,
    backgroundColor: '#E5DFDA',
    alignItems: 'start',
    justifyContent: 'start',
  },

});