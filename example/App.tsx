import { StyleSheet, Text, View } from 'react-native';

import * as NativeClockSettings from 'native-clock-settings';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NativeClockSettings.hello()}</Text>
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
