import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaRestaurantes from './Components/ListaRestaurante';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import DetalleRestaurante from './Components/DetalleRestaurante';
import EditarRestaurante from './Components/EditarRestaurante';

export default function App() {

  //Un estado es una variable que se utiliza para almacenar datos que puede cambiar a lo largo del tiempo
  //Un ejemplo que no tiene variable de estado es la edad de una persona que cambia pero se puede recuperar con la fecha de nacimiento 
  //El componente se vuelve a renderizar debido a las props y estas no se almacenan en el estado
  //useState tiene como parámetro el valor inicial del estado
  //useState retorna un arreglo con dos elementos, el primero es el valor y el segundo es una función para modificar el valor

  

  const Stack = createNativeStackNavigator();

  // Ejecutar cargarRestaurantes solo una vez al montar el componente
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListaRestaurantes" component={ListaRestaurantes}
          options={{ title: 'Lista de Restaurantes' }} /> 
        <Stack.Screen name="DetalleRestaurante" component={DetalleRestaurante}
          options={{ title: 'Detalle del Restaurante' }} />
          <Stack.Screen name="EditarRestaurante" component={EditarRestaurante}
          options={{ title: 'Editar Restaurante' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
