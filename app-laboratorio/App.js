import { StyleSheet, Text, View } from 'react-native';

const nome = 'Hayat Rossi Azam';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
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
