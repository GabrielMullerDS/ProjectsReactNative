import {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function App() {

  const [celsius, setCelsius] = useState(0);
  let fahrenheint;

  function calculateTemperature() {
    fahrenheint = (9 * celsius + 160)/5
    Alert.alert('Conversor', `${celsius}°c equivalem a ${fahrenheint}°f`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> - Aplicativo Temperatura - </Text>
      <TextInput
        style={styles.txtInput} 
        placeholder='Informe a temperarura em Celsius'
        placeholderTextColor='#fff'
        keyboardType='numeric'
        onChangeText={(celsius) => setCelsius(celsius)}
      />
      <TouchableOpacity onPress={calculateTemperature}>
      <Text style={styles.btnCalc}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: '#1f1f1f',
    fontSize: 32,
    fontWeight: 'bold'
  },
  txtInput: {
    marginTop: 5,
    color: '#fff',
    backgroundColor: '#000',
    width: 240,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    textAlign: 'center'
  },
  btnCalc: {
    fontWeight: 'bold',
    color: '#1f1f1f',
    textAlign: 'center',
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 120,
    height: 25
  }
});
