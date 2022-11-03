import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(GET_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }
  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Movies;
