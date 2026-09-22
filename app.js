import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: 'Seu Nome Completo',
  idade: 20,
  cidade: 'Cascavel',
  nota1: 8,
  nota2: 6,
};

function calcularMedia(pessoa) {
  return (pessoa.nota1 + pessoa.nota2) / 2;
}

function verificarSituacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  }

  return 'Em recuperacao';
}

export default function App() {
  const media = calcularMedia(eu);

  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
      <Text>Media: {media}</Text>
      <Text>{verificarSituacao(media)}</Text>
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
