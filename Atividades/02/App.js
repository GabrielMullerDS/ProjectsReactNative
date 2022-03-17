import { useState } from 'react';
import { Alert, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [KMpH, setKMpH] = useState();
  let Mph;

  function converter() {
    Mph = KMpH / 1.609
    Alert.alert('Convertido ^^', `A velocidade de ${KMpH}Km/h é igual a ${Mph.toFixed(3)}Mph`);
  }

  function Duvida() {
    Alert.alert('Obs:', 'Km/h = quilometros por hora\nMph = milhas por hora');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>- Conversor de -</Text>
      <Text style={styles.titles}>- Km/h para Mph -</Text>
      <TextInput
      style={styles.txtInput}
      placeholder='Digite a velocidade em Km/h'
      placeholderTextColor='#4b0082'
      keyboardType='numeric'
      onChangeText={(KMpH) => setKMpH(KMpH)}
      />
      <TouchableOpacity onPress={converter}>
      <Text style={styles.buttom}>Converter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Duvida}>
      <Text style={styles.buttom}>Dúvida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4b0082',
    borderWidth: 15
  },
  titles: {
    fontSize: 32,
    marginBottom: 5,
    color: '#4b0082',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtInput: {
    marginTop: 45,
    marginBottom: 5,
    backgroundColor: '#1f1f1f',
    color: '#4b0082',
    borderRadius: 5,
    borderColor: '#4b0082',
    borderWidth: 2,
    height: 40,
    width: 240,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttom: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#1f1f1f',
    color: '#4b0082',
    marginTop: 45,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#4b0082',
    width: 120,
    height: 25,
    textAlign: 'center'
  }
});
