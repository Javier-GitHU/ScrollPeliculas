import { useEffect, useState } from "react";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<ResultMovie>({
    total: 0,
    page: 1,
    movies: [],
  });
  const [loading, setLoading] = useState(false);
  const loadMovies = async (page: number) => {
    setLoading(true);
    const requestData = {
      page,
      total: nowPlaying.total,
    };

    try {
      const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, requestData);

      if (movies) {
        setNowPlaying((prevState) => ({
          ...prevState,
          movies: [...prevState.movies, ...movies.movies], 
        }));
      }
    } catch (error) {
      console.error("Error al cargar las películas:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadMovies(nowPlaying.page);
  }, []); 
  const handleEndReached = () => {
    if (!loading) {
      const nextPage = nowPlaying.page + 1;
      loadMovies(nextPage);
      setNowPlaying((prevState) => ({
        ...prevState,
        page: nextPage,
      }));
    }
  };
  const loopMovies = () => {
    setNowPlaying((prevState) => {
      const allMovies = [...prevState.movies, ...prevState.movies]; 
      return {
        ...prevState,
        movies: allMovies, 
      };
    });
  };
  useEffect(() => {
    if (nowPlaying.page > 1) {
      loopMovies();
    }
  }, [nowPlaying.page]);

  return {
    nowPlaying,
    loading,
    handleEndReached,
  };
};
