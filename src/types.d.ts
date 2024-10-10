export interface Movie {
  id: number;
  name: string;
}
export interface MovieItemProps {
  movie: Movie;
  updateMovie: (id: number, name: string) => void;
  deleteMovie: (id: number) => void;
}