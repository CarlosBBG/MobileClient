import React, { useEffect, useState } from 'react';
import ItemRestaurante from "./ItemRestaurante";
import { View } from 'react-native';

function ListaRestaurantes({ restaurantes, onRecargar }) {
  
    // Cargar restaurantes cuando se monte el componente
    useEffect(() => {
      onRecargar();
    }, []);
  
  
    return (
      <View>
        {restaurantes.map((rest, index) => (
          <ItemRestaurante 
            key={index}
            id={rest.id}
            nombre={rest.nombre}
            tipo={rest.tipo}
            horario={rest.horario}
            imagen={rest.imagen}
          />
        ))}
      </View>
    );
  }
  
  export default ListaRestaurantes;