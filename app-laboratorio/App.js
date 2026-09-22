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

function verificarSituacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  } else {
    return 'Em recuperacao';
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
      <Text>{calcularMedia(eu)}</Text>
      <Text>{verificarSituacao(calcularMedia(eu))}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f1cca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
