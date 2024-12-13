import { FlatList, StyleSheet, Text, Image, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'

interface Movies {
  movies: Movie[];
  height: number;
  backgroundColor: string; // Para personalizar el fondo
  loading: boolean; // Para mostrar el indicador de carga
  onEndReached: () => void; // Función que se llama cuando se alcanza el final
}

export default function Slider({ movies, height, backgroundColor, loading, onEndReached }: Movies) {
  return (
    <View style={{ backgroundColor }}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Image
            style={styles.imagen}
            key={item.id}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={[styles.contenedor, { height }]}
        onEndReached={onEndReached} 
        onEndReachedThreshold={0.5} 
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#000" /> : null
        } 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
  },
  imagen: {
    width: 200,
    margin: 1,
  },
});
