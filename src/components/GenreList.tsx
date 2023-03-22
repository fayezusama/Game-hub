import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "./../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelect: (genre: Genre) => void;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
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
                <Button
                  onClick={() => onSelect(genre)}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
