import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [km, setKm] = useState();
  let m;

  function converter() {
    m = (km * 1000);
    Alert.alert('Convertido ^^', `A distância de ${km}km é igual a ${m}m`);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.Title}> - Conversor de Km para m - </Text>
      <TextInput
      style={styles.txtInput}
      placeholder='Digite a distância em Km'
      placeholderTextColor='#ffe84f'
      keyboardType='numeric'
      onChangeText={(Km) => setKm(Km)}
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
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffe84f',
    borderWidth: 15
  },
  Title: {
    fontSize: 32,
    marginBottom: 45,
    color: '#ffe84f',
    fontWeight: 'bold'
  },
  txtInput: {
    marginTop: 5,
    marginBottom: 45,
    backgroundColor: '#1f1f1f',
    color: '#ffe84f',
    borderRadius: 5,
    borderColor: '#ffe84f',
    borderWidth: 2,
    height: 40,
    width: 240,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  btnConverter: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#1f1f1f',
    color: '#ffe84f',
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ffe84f',
    width: 120,
    height: 25,
    textAlign: 'center'
  },
});
