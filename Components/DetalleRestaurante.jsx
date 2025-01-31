import React, {useState, useEffect} from "react";
import { View, Text, Image,Button } from "react-native";
import axios from "axios";

const DetalleRestaurante = ({navigation, route}) => {

    const [restaurante, setRestaurante] = useState({});
    const id = route.params.id;

    useEffect(() => {
        axios.get(`http://172.29.55.55:8000/restaurantes/${id}`)
            .then((response) => {
                setRestaurante(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del restaurante:", error);
            });
    }, [id]);

    const { nombre, tipo, horario, imagen } = restaurante;

    return (
        <View>
            <Text>{nombre}</Text>
            <Text>{`Tipo de Comida: ${tipo}`}</Text>
            <Text>{`Horario: ${horario}`}</Text>
            <Image source={{uri: imagen}} style={{width: 200, height: 200}} />
            <Button title="Editar" onPress={() => navigation.navigate("EditarRestaurante", { id: id })} />
            
        </View>
    );
};

export default DetalleRestaurante;
