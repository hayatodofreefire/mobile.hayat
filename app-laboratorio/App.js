import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Hayat Rossi Azam',
  idade: 16,
  cidade: 'Cascavel',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e75f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
