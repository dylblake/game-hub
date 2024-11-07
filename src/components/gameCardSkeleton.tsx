import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GameCardContainer from "./gameCardContainer";

const gameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default gameCardSkeleton;
