import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {genres && (
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={genre.image_background}
                />
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
