import { Pressable, View, Text, Image } from "react-native";

export default function CarButton({name}){
    return(
        <View style={{ height:40, alignItems:'center'}}>
            <View style={{ borderRadius:8, padding:10, backgroundColor:'grey', alignItems:'center', justifyContent:'center'}}><Text style={{color:'white', fontSize: 15, lineHeight: 16}}>{name}</Text></View>
        </View>
    )
}