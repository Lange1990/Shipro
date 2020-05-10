import React from 'react'
import ExpoPixi from 'expo-pixi'
import yourFnToSaveItInYourAPI from 'where ever you api function is'
import { Text, TouchableOpacity, View } from 'react-native'

export default class Firma extends React.Component {
  clearCanvas = () => {
    this.refs.signatureCanvas.clear()
  }
  saveCanvas = async () => {
    const signature_result = await
    this.refs.signatureCanvas.takeSnapshotAsync({
      format: 'jpeg', // 'png' also supported
      quality: 0.5, // quality 0 for very poor 1 for very good
      result: 'file' // 
    })
    yourFnToSaveItInYourAPI(signature_result)
    // inside the fn above, use signature_result.uri to get the absolute file path
  }
  render() {
    return (
      <View>
      <ExpoPixi.Signature
       ref='signatureCanvas' //Important to be able to call this obj
       strokeWidth={3} // thickness of the brush
       strokeAlpha={0.5} // opacity of the brush
      />
      
      </View>
    )
  }
}