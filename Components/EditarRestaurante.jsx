import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditarRestaurante = ({ navigation, route }) => {
    const [restaurante, setRestaurante] = useState({
        nombre: "",
        tipo: "",
        horario: "",
        imagen: ""
    });
    const id = route.params.id;

    useEffect(() => {
        axios.get(`http://192.168.1.17:8000/restaurantes/${id}`)
            .then((response) => {
                setRestaurante(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener el restaurante:", error);
            });
    }, [id]);

    const handleInputChange = (name, value) => {
        setRestaurante((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        axios.put(`http://192.168.1.17:8000/restaurantes/${id}`, restaurante)
            .then(() => {
                navigation.navigate("ListaRestaurantes");
            })
            .catch((error) => {
                console.error("Error al actualizar el restaurante:", error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Restaurante</Text>
            <Text>Nombre:</Text>
            <TextInput
                style={styles.input}
                value={restaurante.nombre}
                onChangeText={(value) => handleInputChange("nombre", value)}
                required
            />
            <Text>Tipo de Comida:</Text>
            <TextInput
                style={styles.input}
                value={restaurante.tipo}
                onChangeText={(value) => handleInputChange("tipo", value)}
                required
            />
            <Text>Horario:</Text>
            <TextInput
                style={styles.input}
                value={restaurante.horario}
                onChangeText={(value) => handleInputChange("horario", value)}
                required
            />
            <Text>Imagen (URL):</Text>
            <TextInput
                style={styles.input}
                value={restaurante.imagen}
                onChangeText={(value) => handleInputChange("imagen", value)}
            />
            <Button title="Guardar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
});

export default EditarRestaurante;