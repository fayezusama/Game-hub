import { Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";


const GenreList = () => {
  const { data :genres, error } = useGenres();
  
  return (
    <>
      {error && <Text>{error}</Text>}
     { genres && <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>}
    </>
  );
};

export default GenreList;
