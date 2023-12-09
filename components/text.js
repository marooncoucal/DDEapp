import { Pressable, View, Text, Image } from "react-native";

export function Heading1({children}){
    return(
        <View style={{paddingVertical: 16}}>
            <Text style={{paddingLeft:20, color: 'black', fontSize: 24, fontWeight: '600'}}>
                {children}
            </Text>
        </View>
        
    )
}

export function Heading2({children}){
    return(
        <View style={{paddingVertical: 0}}>
            <Text style={{width: '100%', color: 'black', fontSize: 24, fontWeight: '600'}}>
                {children}
            </Text>
        </View>
        
    )
}

export function MainText({children}){
    return(
        <View style={{ paddingVertical: 0 }}>
            <Text style={{ width:330, color: '#555555', fontSize: 16, fontWeight: '300' }}>
                {children}
            </Text>
        </View>
        
    )
}


export function TagText({children}){
    return(
        <View style={{ paddingVertical: 0 }}>
            <Text style={{ width: '100%', color: '#555555', fontSize: 14, fontWeight: '300' }}>
                {children}
            </Text>
        </View>
        
    )
}


export function TextLink({children}){
    return(
        <View style={{ paddingVertical: 8, flexDirection:'row', gap: 8, alignItems: 'center'}}>

            <Text style={{ paddingLeft:20, paddingBottom: 2, color: '#55B7EE', fontSize: 14, fontWeight: '500'}}>{children}</Text>

            <View style={{
                width:24, height:24,
                display:'flex', borderRadius: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={require('../assets/arrowlink.png')} 
                    style={{width:24, height:24}}
                />
            </View>
            
        </View>
        
    )
}