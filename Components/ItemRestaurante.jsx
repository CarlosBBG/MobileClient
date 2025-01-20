import React from "react";
import { View, Text, Image } from "react-native";

const ItemRestaurante = ({ id, nombre, tipo, horario, imagen }) => {
    return (
        <View>
            <Text>{"Id:" + id}</Text>
            <Text>{nombre}</Text>
            <Text>{"Tipo de comida: " + tipo}</Text>
            <Text>{"Horario: " + horario}</Text>
            <Image source={imagen} alt="" />
        </View>
    )
};

export default ItemRestaurante;