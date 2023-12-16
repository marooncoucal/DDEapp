import { Pressable, View, Text, Image } from "react-native";

// let cardData = [
//     {
//         id:1, 
//         link:'https://www.awwwards.com/',
//         image:`require('../assets/awards.png')`,
//         title: 'Awwwards',
//         text:'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе', 
//         tag1:'веб-дизайн', 
//         tag2:'сайт', 
//         tag3:'', 
//         tag4:'', 
//         tag5:'' 
//     },
//     {
//         id:2, 
//         link:'https://cantunsee.space/',
//         image:`require('../assets/unsee.png')`,
//         title: `Can't Unsee`, 
//         text:'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
//         tag1:'игра', 
//         tag2:'', 
//         tag3:'', 
//         tag4:'', 
//         tag5:''
//         },
//     {
//         id:3, 
//         link:'https://hydra.ojack.xyz/',
//         image:`require('../assets/hydra.png')`,
//         title: 'Hydra: Live Coding Visuals',
//         text:'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
//         tag1:'код', 
//         tag2:'синтезатор', 
//         tag3:'видео', 
//         tag4:'', 
//         tag5:''
//     },
//     {
//         id:4, 
//         link:'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
//         image:`require('../assets/aboutface.png')`,
//         title: 'Об интерфейсах: основы интерактивного дизайна',
//         text:'«Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков.',
//         tag1:'веб-дизайн', 
//         tag2:'книга', 
//         tag3:'', 
//         tag4:'', 
//         tag5:''
//     },
// ]

// export default function ShortCardList(){
//     return(
//         <View>
//             <View
//                 data={cardData} 
//                 renderItem={
//                     ({item}) => <View key={item.id} item={item}/>
//                 } 
//             />
//         </View>
//     )
// }

// export function ShortCard(){
//     return(
//         <Pressable onPress={() => console.log('click')}>
//             <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
//                 <View style={{flexDirection:'row'}}>
//                     <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
//                         <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                             <Image source={require('../assets/awards.png')} style={{width:80, height:80}}/>
//                             {/* <img src={awards} alt="awards" />; */}
//                         </View>
//                     </View>
//                     <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
//                         <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={4} ellipsizeMode='tail'>{item.title}</Text>
//                         <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={1} ellipsizeMode='tail'>{item.text}</Text>
//                     </View>
//                 </View>
//             </View>
//         </Pressable>
//     )
// }

export default function ShortCardList(){
    return(
        <View style={{paddingBottom: 0}}>
            <ShortCard1></ShortCard1>
            <ShortCard2></ShortCard2>
            <ShortCard3></ShortCard3>
            <ShortCard4></ShortCard4>
        </View>
    )
}

export function ShortCard(){
    return(
        <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/awards.png')} 
                            style={{width:80, height:80}} resizeMode={"contain"}
                        />
                    </View>
                </View>
                <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={4} ellipsizeMode='tail'>
                        Awwwards
                    </Text>
                    <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={1} ellipsizeMode='tail'>
                        Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе
                    </Text>
                </View>
            </View>
        </View>
    )
}

export function ShortCard1(){
    return(
        <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/awards.png')} 
                            style={{width:80, height:80}} resizeMode={"contain"}
                        />
                    </View>
                </View>
                <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={1} ellipsizeMode='tail'>
                        Awwwards
                    </Text>
                    <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={2} ellipsizeMode='tail'>
                        Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе
                    </Text>
                </View>
            </View>
        </View>
    )
}

export function ShortCard2(){
    return(
        <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/unsee.png')} 
                            style={{width:80, height:80}} resizeMode={"contain"}
                        />
                    </View>
                </View>
                <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={1} ellipsizeMode='tail'>
                        Can't Unsee
                    </Text>
                    <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={2} ellipsizeMode='tail'>
                        Игра для дизайнеров для проверки знаний в дизайне интерфейсов
                    </Text>
                </View>
            </View>
        </View>
    )
}

export function ShortCard3(){
    return(    
        <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'gray', flex: 1, alignSelf: 'stretch', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/hydra.png')} 
                            style={{width:80, height:80}} resizeMode={"contain"}
                        />
                    </View>
                </View>
                <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={1} ellipsizeMode='tail'>
                        Hydra: Live Coding Visuals
                    </Text>
                    <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={2} ellipsizeMode='tail'>
                        Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере
                    </Text>
                </View>
            </View>
        </View>
    )
}

export function ShortCard4(){
    return(
        <View style={{height:100, width: 280, paddingLeft:10, paddingRight:10, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>

                <View style={{width: 80, height: 80, padding: 4, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <View style={{backgroundColor:'#eee', flex: 1, alignSelf: 'stretch', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/aboutface.png')} 
                            style={{width: 80, height: 80}} resizeMode={"contain"}
                        />
                    </View>
                </View>

                <View style={{width: '100%', paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <Text style={{width: '100%', color: 'black', fontSize: 20, fontWeight: '600'}} numberOfLines={1} ellipsizeMode='tail'>
                        About Face
                    </Text>
                    <Text style={{width: '100%', color: '#555555', fontSize: 14, fontWeight: '300', lineHeight: 21}} numberOfLines={2} ellipsizeMode='tail'>
                        «Об интерфейсах» — это книга, которая вывела интерактивный дизайн из исследовательских лабораторий в повседневный лексикон, а обновленное четвертое издание продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков
                    </Text>
                </View>

            </View>
        </View>
    )
}