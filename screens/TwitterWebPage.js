import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity,
    SafeAreaView, Image} from 'react-native';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';

const DEVICEWIDTH = Dimensions.get('window').width;
const DEVICEHEIGHT = Dimensions.get('window').height;

export default class TwitterWebView extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
              <View style={{flexDirection: 'row', height: DEVICEHEIGHT * 0.08, width: DEVICEWIDTH,
                            backgroundColor: "#2574EB", alignItems: 'center', marginTop: 35}}>
                <View style={{ alignItems: 'center', flexDirection: "row",
                                marginStart: 10}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.goBack()}
                    style={{width: DEVICEWIDTH * 0.135, height: DEVICEHEIGHT * 0.09,
                    justifyContent: 'center'}}>
                    <AntDesign name="arrowleft" size={35} color="#FFFFFF"/>
                  </TouchableOpacity>
                    <AntDesign name="twitter" size={40} color="#FFFFFF" style={{marginStart: 10}}/>
                    <Text style={{color: "#FFFFFF", marginStart: 10, fontSize: 18,
                    width: DEVICEWIDTH * 0.87, fontWeight: 'bold'}}>
                        Twitter</Text>
                </View>
              </View>
        <WebView 
          source={{ uri: 'https://twitter.com/icc_schedule' }} 
        />
      </SafeAreaView>
    );
  }
}