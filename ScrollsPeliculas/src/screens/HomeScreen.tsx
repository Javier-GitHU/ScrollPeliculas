import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {
  const { nowPlaying, loading, handleEndReached } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Películas en cartelera</Text>
      {/* Pasamos la función onEndReached al Slider */}
      <Slider 
        movies={nowPlaying.movies} 
        height={250} 
        backgroundColor="#eaeaea" 
        loading={loading} 
        onEndReached={handleEndReached} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
