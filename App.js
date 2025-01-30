import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaRestaurantes from './Components/ListaRestaurante';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Location from 'expo-location';

export default function App() {

  //Un estado es una variable que se utiliza para almacenar datos que puede cambiar a lo largo del tiempo
  //Un ejemplo que no tiene variable de estado es la edad de una persona que cambia pero se puede recuperar con la fecha de nacimiento 
  //El componente se vuelve a renderizar debido a las props y estas no se almacenan en el estado
  //useState tiene como parámetro el valor inicial del estado
  //useState retorna un arreglo con dos elementos, el primero es el valor y el segundo es una función para modificar el valor

  const [restaurantes, setRestaurantes] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Función para cargar restaurantes
  const cargarRestaurantes = () => {
    axios
      .get("http://172.31.45.35:8000/restaurantes")
      .then((response) => {
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.log("No se puede cargar los restaurantes", error);
      });
  };



  useEffect(() => {
    (async () => {
      var { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('No se ha concedido el permiso de acceso a la geo...');
        return;
      }
      var location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  return (
    <View style={styles.container}>
      <ListaRestaurantes
        restaurantes={restaurantes}
        onRecargar={cargarRestaurantes} // Pasar la función sin memoización
      />
      <View>
        <Text>{errorMsg ? errorMsg :
          JSON.stringify(location.coords.longitude)}</Text>
        <Text>{errorMsg ? errorMsg :
          JSON.stringify(location.coords.latitude)}</Text>
      </View>
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
