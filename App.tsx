import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {Items} from './components/item';
import {Balance} from './components/balance';
import {Month} from './components/month';
import {Fragment} from 'react';
import {styles} from './styles/styles';

export default function App() {
  // On App Start

  const today = new Date();

  return (
    <Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView/>
        <View style={{backgroundColor: "white"}}/>
        <View style={[styles.col, {backgroundColor:"#f0f0f0", gap: 25}]}>
          <View style={{backgroundColor: "white"}}>
            <Balance year={today.getFullYear()} month={today.getMonth()}/>
          </View>
          <View style={{backgroundColor: "white"}}>
            <Month year={today.getFullYear()} month={today.getMonth()}/>
            <Items year={today.getFullYear()} month={today.getMonth()}/>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.addOverlay]}>
        <Text>Hello</Text>
      </View>
    </Fragment>
  );
}