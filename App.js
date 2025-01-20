import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaRestaurantes from './Components/ListaRestaurante';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [restaurantes, setRestaurantes] = useState([]);

  // Función para cargar restaurantes
  const cargarRestaurantes = () => {
    axios
      .get("http://172.29.42.234:8000/restaurantes")
      .then((response) => {
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.log("No se puede cargar los restaurantes", error);
      });
  };

  // Ejecutar cargarRestaurantes solo una vez al montar el componente
  useEffect(() => {
    cargarRestaurantes();
  }, [0]); // Array vacío asegura que se ejecute solo al montar

  return (
    <View style={styles.container}>
      <ListaRestaurantes
        restaurantes={restaurantes}
        onRecargar={cargarRestaurantes} // Pasar la función sin memoización
      />
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
