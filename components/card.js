import { Pressable, View, Text, FlatList, Image } from "react-native";
import { Heading1, Heading2, MainText, TagText } from "./text";

export default function Card({title, text, tag1, tag2, pic}){
    return(
        <View style={{paddingHorizontal:10,  borderRadius: 6, overflow: 'hidden', 
        flexDirection: 'column', display: 'flex'}}>

            <View style={{width: '100%', height: 180, 
            backgroundColor:'', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Image 
                source={pic} resizeMode={"contain"}
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