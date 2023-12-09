import { Pressable, View, Text, Image } from "react-native";

export default function Tag({name}){
    return(
        <View style={{ flex:1, alignItems:'center'}}>
            <View style={{height:40, width:70, borderRadius:8, padding:10, backgroundColor:'grey', flex:1, alignItems:'center', justifyContent:'center'}}><Text style={{color:'white', fontSize: 15, lineHeight: 16}}>{name}</Text></View>
        </View>
    )
}