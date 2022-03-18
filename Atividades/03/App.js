import { useState } from 'react'
import { Alert, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [dolar, setDolar] = useState();
  const [reais, setReais] = useState();
  let conv;

  function converter() {
    if(dolar<=0){
      Alert.alert('Wow 😲', 'O Dolar está a 0 (zero) rais?')
    }
    else if(reais<=0){
      Alert.alert('Éééééé...', 'Eu entendo amigo, támbem estousem um tustão no bolso 😥')
    }
    else{
    conv = (reais/dolar)
    Alert.alert('Convertido ^^', `Seus R$${reais} seriam convertidos para $${conv.toFixed(2)}`)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>- Conversor de -{'\n'}- Dolar para Reais -</Text>
      <TextInput
      style={styles.txtInput}
      placeholder='Digite o valor do dolar atual (utilize . ao invés da ,)'
      placeholderTextColor='#ffe84f'
      keyboardType='numeric'
      onChangeText={(dolar) => setDolar(dolar)}
      />
      <TextInput
      style={styles.txtInput}
      placeholder='Digite o valor em reais (utilize . ao invés da ,)'
      placeholderTextColor='#ffe84f'
      keyboardType='numeric'
      onChangeText={(reais) => setReais(reais)}
      />
      <TouchableOpacity onPress={converter}>
        <Text style={styles.btnConverter}>Converter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8cc5d2',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffe84f',
    borderWidth: 15
  },
  title: {
    fontSize: 32,
    marginBottom: 15,
    color: '#ffe84f',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtInput: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#8cc5d2',
    color: '#ffe84f',
    borderRadius: 5,
    borderColor: '#ffe84f',
    borderWidth: 2,
    height: 40,
    width: 360,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  btnConverter: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#8cc5d2',
    color: '#ffe84f',
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ffe84f',
    width: 120,
    height: 25,
    textAlign: 'center'
  }
});
