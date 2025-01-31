import React from "react";
import { TouchableOpacity, Text, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ItemRestaurante = ({ id, nombre, tipo, horario, imagen, onPress }) => {

    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{"Id:" + id}</Text>
            <Text>{nombre}</Text>
            <Text>{"Tipo de comida: " + tipo}</Text>
            <Text>{"Horario: " + horario}</Text>
            <Image source={imagen} alt="" />
            <Button title="Ver detalles" onPress={() => navigation.navigate("DetalleRestaurante", { id: id })} />
        </TouchableOpacity>
    )
};

export default ItemRestaurante;