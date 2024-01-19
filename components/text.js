import { Pressable, View, Text, Image } from "react-native";

export function Heading1({ children }) {
    return (
        <View style={{ paddingVertical: 10 }}>
            <Text style={{ paddingLeft: 12, color: '#222', fontSize: 14, fontWeight: '800', letterSpacing: 1.2 }}>
                {children}
            </Text>
        </View>

    )
}

export function Heading2({ children }) {
    return (
        <View style={{ paddingVertical: 0 }}>
            <Text style={{ width: '100%', color: '#222', fontSize: 22, fontWeight: '900' }}>
                {children}
            </Text>
        </View>

    )
}

export function Heading3({ children }) {
    return (
        <View style={{ paddingVertical: 0 }}>
            <Text style={{ color: '#222', fontSize: 18, fontWeight: '900' }}
                numberOfLines={2} ellipsizeMode='tail'>
                {children}
            </Text>
        </View>

    )
}

export function SCardText({ children }) {
    return (
        <View style={{ paddingTop: 0 }} >
            <Text style={{ color: '#555', fontSize: 12, fontWeight: '500' }} numberOfLines={2} ellipsizeMode='tail'>
                {children}
            </Text>
        </View>

    )
}

export function DotTag() {
    return (
        <View style={{ paddingTop: 3 }}>
            <View style={{
                backgroundColor: '#555555', height: 3, width: 3, borderRadius: 100
            }}>
            </View>
        </View>
    )
}


export function MainText({ children }) {
    return (
        <View style={{ paddingVertical: 0 }}>
            <Text style={{ width: '100%', color: '#555', fontSize: 15, fontWeight: '500' }}>
                {children}
            </Text>
        </View>

    )
}


export function TagText({ children }) {
    return (
        <View style={{ paddingTop: 4 }}>
            <Text style={{ width: '100%', color: '#555', fontSize: 15, fontWeight: '500' }}>
                {children}
            </Text>
        </View>

    )
}


export function TextLink({ children }) {
    return (
        <View style={{ paddingVertical: 8, flexDirection: 'row', gap: 8, alignItems: 'center' }}>

            <Text style={{ paddingLeft: 20, paddingBottom: 2, color: '#222', fontSize: 14, fontWeight: '500' }}>{children}</Text>

            <View style={{
                width: 24, height: 24,
                display: 'flex', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}>
                <Image
                    source={require('../assets/arrowlink.png')}
                    style={{ width: 24, height: 24 }}
                />
            </View>

        </View>

    )
}



