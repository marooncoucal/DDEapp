import { Pressable, View, Text, Image } from "react-native";

export default function CardLinks({ name }) {
    return (
        <View style={{
            paddingBottom: 16,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
        }}>

            <View style={{
                backgroundColor: '#fff',
                width: 136, height: 50, borderRadius: 200, overflow: 'hidden',
                flexDirection: 'row', alignItems: 'center'
            }}>
                <Image
                    resizeMode={"center"}
                    source={require('../assets/browser.png')}
                    style={{
                        width: 60, height: '100%',
                        padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }} />
                <Text
                    style={{ color: '#222', fontSize: 14, fontWeight: '500' }}>
                    перейти
                </Text>
            </View>


            <View style={{
                backgroundColor: '#fff',
                width: 50, height: 50, borderRadius: 200, overflow: 'hidden',
            }}>
                <Image
                    resizeMode={"center"}
                    source={require('../assets/link.png')}
                    style={{
                        width: '100%', height: '100%',
                        padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }} />
            </View>

            <View style={{
                backgroundColor: '#fff',
                width: 50, height: 50, borderRadius: 200, overflow: 'hidden',
            }}>
                <Image
                    resizeMode={"center"}
                    source={require('../assets/share.png')}
                    style={{
                        width: '100%', height: '100%',
                        padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }} />
            </View>

            <View style={{
                backgroundColor: '#fff',
                width: 50, height: 50, borderRadius: 200, overflow: 'hidden',
            }}>
                <Image
                    resizeMode={"center"}
                    source={require('../assets/favourite.png')}
                    style={{
                        width: '100%', height: '100%',
                        padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }} />
            </View>

        </View>
    )
}