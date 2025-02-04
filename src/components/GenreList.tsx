import {
  FaGhost, FaRocket, FaHeart, FaFilm, FaTheaterMasks, FaMusic,
  FaSkull, FaDragon, FaGlobe, FaCar, FaLandmark, FaGuitar, FaRobot
} from "react-icons/fa";
import { IconType } from "react-icons";
import useGenres from "@/hooks/useGenres"
import { Box, HStack, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const genreIcons: Record<number, IconType> = {
  28: FaFilm,           // Action 🎬
  12: FaGlobe,          // Adventure 🌍
  16: FaDragon,         // Animation 🐉
  35: FaTheaterMasks,   // Comedy 🎭
  80: FaSkull,          // Crime ☠️
  99: FaLandmark,       // Documentary 🏛️
  18: FaHeart,          // Drama ❤️
  10751: FaGuitar,      // Family 🎸
  14: FaGhost,          // Fantasy 👻
  36: FaLandmark,       // History 🏰
  27: FaSkull,          // Horror ☠️
  10402: FaMusic,       // Music 🎵
  9648: FaRobot,        // Mystery 🤖
  10749: FaHeart,       // Romance 💖
  878: FaRocket,        // Sci-Fi 🚀
  10770: FaCar,         // TV Movie 🚗
  53: FaSkull,          // Thriller 😱
  10752: FaLandmark,    // War ⚔️
  37: FaGuitar,         // Western 🤠
};

const GenreList = ()  => {
  const { genres, isLoading, error } = useGenres();

   if (error) return null;
   if (isLoading) return <Spinner/>

  return (
    <List.Root gap={3}>
      {genres.map((genre) => {
        const IconComponent = genreIcons[genre.id] || FaGhost; // Fallback dacă nu există icon

        return (
          <ListItem key={genre.id} paddingY="5px" listStyleType="none">
            <HStack>
              <Box p={3}>
                <IconComponent size={24} />
              </Box>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List.Root>
  );
};

export default GenreList;
