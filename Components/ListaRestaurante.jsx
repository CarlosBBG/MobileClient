import React, { useEffect, useState } from 'react';
import ItemRestaurante from "./ItemRestaurante";
import { View, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);

  // Función para cargar restaurantes
  const cargarRestaurantes = () => {
    axios
      .get("http://192.168.1.17:8000/restaurantes")
      .then((response) => {
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.log("No se puede cargar los restaurantes", error);
      });
  };

  useEffect(() => {
    cargarRestaurantes();
  }, []); // Array vacío asegura que se ejecute solo al montar

  const renderItem = ({ item }) => (
    <ItemRestaurante
      id={item.id}
      nombre={item.nombre}
      tipo={item.tipo}
      horario={item.horario}
      imagen={item.imagen}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});

export default ListaRestaurantes;