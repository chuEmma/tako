import {SafeAreaView} from 'react-native';
import {ItemContainer} from './components/item';
import {styles} from './styles/styles';
import {Balance} from './components/balance';

export default function App() {
  // On App Start

  const today = new Date();

  return (
    <SafeAreaView style={[styles.col]}>
      <Balance year={today.getFullYear()} month={today.getMonth()}/>
      <ItemContainer year={today.getFullYear()} month={today.getMonth()}/>
    </SafeAreaView>
  );
}

