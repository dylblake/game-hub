import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const gameCardSkeleton = () => {
  return (
    <Card borderRadius={10} height="200px" width="300px">
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default gameCardSkeleton;
