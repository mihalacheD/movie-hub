import { Card } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonText,
} from "@/components/ui/skeleton"


const MovieCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow='hidden' width='350px'>
      <Skeleton height='500px'/>
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default MovieCardSkeleton
