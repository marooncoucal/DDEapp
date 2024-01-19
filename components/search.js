import { Pressable, View, Text, Image } from "react-native";

export default function Search() {
    return (
        <View style={{
            width: "auto", gap: 8, paddingVertical: 8,
            flexDirection: "row", alignItems: 'center', justifyContent: 'center'
        }}>
            <View style={{
                borderRadius: 80, paddingLeft: 16, height: 40, width: 280, backgroundColor: '#fff', gap: 6,
                flexDirection: "row", alignItems: 'center', justifyContent: 'start'
            }}>
                <Image source={require('../assets/search.png')} style={{ width: 26, height: 26 }} />
                <Text style={{ color: '#999' }}>Введите запрос</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('screen2')}>
                <Image source={require('../assets/random.png')} style={{ width: 36, height: 36 }} />
            </Pressable>
        </View>
    )
}