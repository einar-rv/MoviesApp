import React, {useState} from 'react';
import {View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default App = () => {
    //const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([
        {
            id: '1',
            name: 'Mision Imposible',
            director: 'Brian De Palma',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecartelera.com%2Fpeliculas%2Fmision-imposible-1%2F&psig=AOvVaw1w1FzD1t0Y4n8u4lYw2n8w&ust=1633799355412000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiJ7c6Z9fMCFQAAAAAdAAAAABAD',
        },
        {
            id: '2',
            name: 'El Padrino',
            director: 'Francis Ford Coppola',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecartelera.com%2Fpeliculas%2Fel-padrino-1%2F&psig=AOvVaw1w1FzD1t0Y4n8u4lYw2n8w&ust=1633799355412000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiJ7c6Z9fMCFQAAAAAdAAAAABAD',
            
        },
        {
            id: '3',
            name: 'Sharknado',
            director: 'Anthony C. Ferrante',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecartelera.com%2Fpeliculas%2Fsharknado-1%2F&psig=AOvVaw1w1FzD1t0Y4n8u4lYw2n8w&ust=1633799355412000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiJ7c6Z9fMCFQAAAAAdAAAAABAD',
        },
        {
            id: '4',
            name: 'El Señor de los Anillos',
            director: 'Peter Jackson',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecartelera.com%2Fpeliculas%2Fel-senor-de-los-anillos-la-comunidad-del-anillo-1%2F&psig=AOvVaw1w1FzD1t0Y4n8u4lYw2n8w&ust=1633799355412000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiJ7c6Z9fMCFQAAAAAdAAAAABAD',
        }
    ]);
    return(
        <View style={styles.container}>
        <Text style={styles.title}> Bienvenido a tu App de peliculas </Text>

        <FlatList data={movies} renderitem={({item }) => (
        <>
        <Image style={styles.moviePoster} source={{ uri: item.url }} />
        <Text>{item.name}</Text>
        <Text>{item.director}</Text>
        </>
    )}   
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        paddingTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    moviePoster: {
        width: 150,
        height: 200,
        margin: 10,
    },
})
