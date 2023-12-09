import { Pressable, View, Text, FlatList, Image } from "react-native";
// import awards from './assets/awards.png';

let flatListData = [
    {
        id:1, 
        link:'https://www.awwwards.com/',
        image:`require('../assets/awards.png')`,
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
        image:`require('../assets/unsee.png')`,
        title: `Can't Unsee`, 
        text:'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
        tag1:'игра', 
        tag2:'', 
        tag3:'', 
        tag4:'', 
        tag5:''
        },
    {
        id:3, 
        link:'https://hydra.ojack.xyz/',
        image:`require('../assets/hydra.png')`,
        title: 'Hydra: Live Coding Visuals',
        text:'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
        tag1:'код', 
        tag2:'синтезатор', 
        tag3:'видео', 
        tag4:'', 
        tag5:''
    },
    {
        id:4, 
        link:'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
        image:`require('../assets/aboutface.png')`,
        title: 'Об интерфейсах: основы интерактивного дизайна',
        text:'«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков.',
        tag1:'веб-дизайн', 
        tag2:'книга', 
        tag3:'', 
        tag4:'', 
        tag5:''
    },
]

export default function FlatListFunction(){
    return(
        <View>
            <FlatList 
                data={flatListData} 
                renderItem={
                    ({item}) => <FlatListItem key={item.id} item={item}/>
                } 
            />
        </View>
    )
}

function FlatListItem({item}){
    return(
        <Pressable onPress={() => console.log('click')}>
            <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={item.image} style={{width:80, height:80}}/>
                            {/* <img src={awards} alt="awards" />; */}
                        </View>
                    </View>
                    <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                        <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={4} ellipsizeMode='tail'>{item.title}</Text>
                        <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={1} ellipsizeMode='tail'>{item.text}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

function FlatListSeparator(){
    return(
        <View style={{borderBottomWidth:1}}></View>
    )
}