import {SafeAreaView, View} from 'react-native';
import {Items} from './components/item';
import {styles} from './styles/styles';
import {Balance} from './components/balance';
import {Month} from './components/month';
import { Fragment } from 'react';

export default function App() {
  // On App Start

  const today = new Date();

  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: "white"}}/>
      <SafeAreaView style={{backgroundColor:"#f0f0f0", gap: 25}}>
        <View style={{backgroundColor: "white"}}>
          <Balance year={today.getFullYear()} month={today.getMonth()}/>
        </View>
        <View style={{backgroundColor: "white"}}>
          <Month year={today.getFullYear()} month={today.getMonth()}/>
          <Items year={today.getFullYear()} month={today.getMonth()}/>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}