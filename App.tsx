import { StyleSheet, Text, View } from 'react-native';
import {ItemObj} from './classes/item';
import {data} from './data';
import {createItems} from './components/item';

export default function App() {
  // On App Start

  const items = data.items;

  return (
    <View style={styles.container}>
      {createItems(items)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
