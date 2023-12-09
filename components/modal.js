import {View, Text, Pressable, StyleSheet, Modal} from "react-native"
import { useState } from 'react';

let [openSettingModal, setOpenSettingModal] = useState(false)

export default function MyModal({closeModal}){
    return(
        <Modal transparent={true} visible={openSettingModal} animationType='slide'>
        <SettingModal closeModal={() => {setOpenSettingModal(false)}}/>
        </Modal>
    )
  }


function SettingModal({closeModal}){
    return(
        <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
        <View style={{alignItems:'center', justifyContent:'center', width:220, height:100,borderColor:'#ddd', borderWidth:2, backgroundColor:'#fff'}}>
            <Pressable onPress={() => {closeModal()}}>
            <Text style={{height:30}}>Close Settings</Text>
            </Pressable>
        </View>
        </View>
        
    )
}


let styles = StyleSheet.create({
    modal: {
        width: 300,
        height: 300,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -150,
        marginRight: -150,
    },
})

