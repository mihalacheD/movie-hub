import { HStack } from "@chakra-ui/react";
import { Star } from "lucide-react";

const RenderStars = ({ rating }: { rating: number }) => {
  return (
    <HStack>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          fill={i < rating / 2 ? "#FFD700" : "none"} // Umple stelele până la rating/2
          stroke="#FFD700"
          className="w-5 h-5" // Dimensiune standard pentru stele
        />
      ))}
    </HStack>
  );
};

export default RenderStars;

