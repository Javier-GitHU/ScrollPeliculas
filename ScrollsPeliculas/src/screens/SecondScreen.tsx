import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';  // Asegúrate de que el hook useMovies esté bien definido

export default function SecondScreen() {
  const { nowPlaying } = useMovies();  // Solo obtenemos las películas sin la lógica de carga infinita

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configuración</Text>

      {/* Muestra las películas de forma estática (sin scroll infinito) */}
      <FlatList
        data={nowPlaying.movies}
        keyExtractor={(item) => item.id.toString()}  // Usamos el ID único de la película
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            {/* Aquí puedes añadir una imagen o más detalles de la película */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',  // Fondo rojo
    padding: 20,  // Espaciado dentro de la vista principal
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',  // Color del texto en blanco para resaltar sobre el fondo rojo
    textAlign: 'center',
    marginVertical: 10,
  },
  movieCard: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
