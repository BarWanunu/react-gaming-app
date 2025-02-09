import { GameQuery } from "@/App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={3} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
