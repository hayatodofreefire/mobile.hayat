import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Hayat Rossi Azam',
  idade: 16,
  cidade: 'Cascavel',
  nota1: 8,
  nota2: 7,
};

function calcularMedia(pessoa) {
  return (pessoa.nota1 + pessoa.nota2) / 2;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
      <Text>{calcularMedia(eu)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4592eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
